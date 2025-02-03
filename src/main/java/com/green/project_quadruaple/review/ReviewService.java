package com.green.project_quadruaple.review;

import com.green.project_quadruaple.common.MyFileUtils;
import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.review.model.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewMapper reviewMapper;
    private final MyFileUtils myFileUtils;
    private final AuthenticationFacade authenticationFacade;

    public ResponseEntity<ResponseWrapper<List<ReviewSelRes>>> getReview(ReviewSelReq req) {
        List<ReviewSelRes> res = reviewMapper.getReview(req);

        if (res.isEmpty()) {
            return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), new ArrayList<>()));
        }

        List<Long> reviewIds = res.stream()
                .map(ReviewSelRes::getReviewId)
                .collect(Collectors.toList());

        List<ReviewPicSel> reviewPics = reviewMapper.getReviewPics(reviewIds);

        Map<Long, List<String>> picHashMap = new HashMap<>();
        for (ReviewPicSel item : reviewPics) {
            picHashMap.computeIfAbsent(item.getReviewId(), k -> new ArrayList<>()).add(item.getPic());
        }

        for (ReviewSelRes review : res) {
            List<String> pictureUrls = picHashMap.get(review.getReviewId());
            if (pictureUrls != null) {
                List<ReviewPicSel> reviewPicSelList = pictureUrls.stream()
                        .map(url -> {
                            ReviewPicSel reviewPicSel = new ReviewPicSel();
                            reviewPicSel.setPic(url);
                            reviewPicSel.setReviewId(review.getReviewId());
                            return reviewPicSel;
                        }).collect(Collectors.toList());
                review.setReviewPics(reviewPicSelList);
            }
        }

        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), res));
    }


    @Transactional
    public ResponseEntity<ResponseWrapper<Integer>> postRating(List<MultipartFile> pics, ReviewPostReq p) {
        p.setReviewId(authenticationFacade.getSignedUserId());

        if (p.getReviewId() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null));
        }

        // 리뷰 저장
        int result = reviewMapper.postRating(p);
        if (result == 0) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null));
        }

        long reviewId = p.getReviewId();
        String middlePath = String.format("reviewId/%d", reviewId);
        myFileUtils.makeFolders(middlePath);

        // ReviewPicDto 리스트 생성
        List<ReviewPicDto> reviewPicList = new ArrayList<>();
        ReviewPicDto reviewPicDto = new ReviewPicDto();
        reviewPicDto.setReviewId(reviewId);
        List<String> picNameList = new ArrayList<>();

        for (MultipartFile pic : pics) {
            String savedPicName = myFileUtils.makeRandomFileName(pic);
            String filePath = String.format("%s/%s", middlePath, savedPicName);
            try {
                myFileUtils.transferTo(pic, filePath);
            } catch (IOException e) {
                // 폴더 삭제 처리
                String delFolderPath = String.format("%s/%s", myFileUtils.getUploadPath(), middlePath);
                myFileUtils.deleteFolder(delFolderPath, true);
                return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                        .body(new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null));
            }

            // 사진 이름 리스트에 추가
            picNameList.add(savedPicName);
        }

        // ReviewPicDto에 사진 이름 리스트 설정
        reviewPicDto.setPics(picNameList);
        reviewPicList.add(reviewPicDto); // 리스트에 추가

        // DB에 사진 저장
        int resultPics = reviewMapper.postReviewPic(reviewPicList);
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), resultPics));
    }


//    @Transactional
//    public ResponseEntity<ResponseWrapper<Integer>> updateReview(List<MultipartFile> pics, ReviewUpdReq p) {
//        int updatedRows = reviewMapper.patchReview(p);
//        if (updatedRows == 0) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body(new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null));
//        }
//
//        long reviewId = p.getReviewId();
//        String middlePath = String.format("reviewId/%d", reviewId);
//
//        // 기존 사진 가져오기
//        List<ReviewPicSel> existingPics = reviewMapper.getReviewPics(Collections.singletonList(reviewId));
//
//        for (ReviewPicSel pic : existingPics) {
//            myFileUtils.deleteFolder(String.format("%s/%s", myFileUtils.getUploadPath(), middlePath, pic.getPic()), true);
//        }
//
//        List<ReviewPicDto> picNameList = new ArrayList<>();
//        myFileUtils.makeFolders(middlePath);
//        for (MultipartFile pic : pics) {
//            String savedPicName = myFileUtils.makeRandomFileName(pic);
//            String filePath = String.format("%s/%s", middlePath, savedPicName);
//            try {
//                myFileUtils.transferTo(pic, filePath);
//            } catch (IOException e) {
//                myFileUtils.deleteFolder(String.format("%s/%s", myFileUtils.getUploadPath(), middlePath), true);
//                return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
//                        .body(new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null));
//            }
//            ReviewPicDto reviewPicDto = new ReviewPicDto();
//            reviewPicDto.setReviewId(reviewId);
//            reviewPicDto.setPic(savedPicName);
//            picNameList.add(reviewPicDto);
//        }
//        int resultPics = reviewMapper.patchReviewPic(picNameList);
//        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), resultPics));
//    }

    public ResponseEntity<ResponseWrapper<Integer>> deleteReview(ReviewDelReq req) {
        req.setUserId(authenticationFacade.getSignedUserId());
        ReviewDelPicReq picReq = new ReviewDelPicReq();
        picReq.setReviewId(req.getReviewId());
        int affectedRowsPic = reviewMapper.deleteReviewPic(picReq);
        int affectedRowsReview = reviewMapper.deleteReview(req);
        String deletePath = String.format("%s/feed/%d", myFileUtils.getUploadPath(), req.getReviewId());
        myFileUtils.deleteFolder(deletePath, true);
        if (affectedRowsReview > 0) {
            return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), affectedRowsReview));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null));
        }
    }


    public ResponseWrapper<List<MyReviewSelRes>> getMyReviews(MyReviewSelReq req) {
        log.info("Received userId: " + req.getUserId());

        if (req.getStartIdx() < 0) {
            return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), new ArrayList<>());
        }

        List<MyReviewSelRes> resList = reviewMapper.getMyReviews(req);

        if (resList == null || resList.isEmpty()) {
            return new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), new ArrayList<>());
        }

        List<Long> reviewIds = resList.stream()
                .map(MyReviewSelRes::getReviewId)
                .collect(Collectors.toList());

        List<ReviewPicSel> reviewPics = reviewMapper.getReviewPics(reviewIds);

        for (MyReviewSelRes review : resList) {
            List<ReviewPicSel> picsForReview = reviewPics.stream()
                    .filter(pic -> pic.getReviewId() == review.getReviewId())
                    .collect(Collectors.toList());
            review.setReviewPics(picsForReview);
        }

        return new ResponseWrapper<>(ResponseCode.OK.getCode(), resList);
    }



}
