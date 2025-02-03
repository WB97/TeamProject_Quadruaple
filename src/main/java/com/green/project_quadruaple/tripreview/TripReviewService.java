package com.green.project_quadruaple.tripreview;

import com.green.project_quadruaple.common.MyFileUtils;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.tripreview.model.TripLikeDto;
import com.green.project_quadruaple.tripreview.model.TripReviewPatchDto;
import com.green.project_quadruaple.tripreview.model.TripReviewPostReq;
import com.green.project_quadruaple.tripreview.model.TripReviewPostRes;
import com.green.project_quadruaple.user.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TripReviewService {
    private final TripReviewMapper tripReviewMapper;
    private final MyFileUtils myFileUtils;
    private final AuthenticationFacade authenticationFacade;

    // 여행기 등록
    public TripReviewPostRes postTripReview(List<MultipartFile> tripReviewPic, TripReviewPostReq req) {
        req.setUserId(authenticationFacade.getSignedUserId());
        tripReviewMapper.insTripReview(req);


        // 파일 등록
        long tripReviewId = req.getTripReviewId();
        String middlePath = String.format("tripReview/%d", tripReviewId);
        myFileUtils.makeFolders(middlePath);

        List<String> picNameList = new ArrayList<>();
        // 사진 파일이 있을 경우만 처리
        if (tripReviewPic != null && !tripReviewPic.isEmpty()) {
            myFileUtils.makeFolders(middlePath);

            for (MultipartFile pic : tripReviewPic) {
                String savedPicName = myFileUtils.makeRandomFileName(pic);
                picNameList.add(savedPicName);
                String filePath = String.format("%s/%s", middlePath, savedPicName);
                try {
                    myFileUtils.transferTo(pic, filePath);
                } catch (IOException e) {
                    // 업로드된 폴더 삭제
                    String delFolderPath = String.format("%s/%s", myFileUtils.getUploadPath(), middlePath);
                    myFileUtils.deleteFolder(delFolderPath, true);
                    throw new RuntimeException(e);
                }
            }

            // 사진 파일이 있는 경우에만 DB 저장
            if (!picNameList.isEmpty()) {
                tripReviewMapper.insTripReviewPic(tripReviewId, picNameList);
            }
        }

        TripReviewPostRes tripReviewPostRes = new TripReviewPostRes();
        tripReviewPostRes.setTripReviewId(tripReviewId);
        tripReviewPostRes.setTripReviewPic(picNameList);


        return tripReviewPostRes;
    }

    // 여행기 수정
    public int patchTripReview(List<MultipartFile> tripPic, TripReviewPatchDto dto) {
        dto.setUserId(authenticationFacade.getSignedUserId());

        int result = tripReviewMapper.updTripReview(dto);
        if (result == 0) {
            throw new RuntimeException("여행기 수정에 실패했습니다.");
        }

        if (tripPic != null && !tripPic.isEmpty()) {
            // 기존 DB의 여행기 사진 삭제
            tripReviewMapper.delTripReviewPic(dto.getTripReviewId());

            String basePath = myFileUtils.getUploadPath(); // 기본 업로드 경로
            String middlePath = String.format("tripReview/%d", dto.getTripReviewId());
            String targetPath = String.format("%s/%s", basePath, middlePath); // 중복 경로 방지

            myFileUtils.deleteFolder(targetPath, true);

            File newFolder = new File(targetPath);
            if (!newFolder.exists()) {
                boolean created = newFolder.mkdirs();
                if (!created) {
                    throw new RuntimeException("여행기 사진 폴더 생성에 실패했습니다: " + targetPath);
                }
            }

            List<String> picNameList = new ArrayList<>();


            for (MultipartFile pic : tripPic) {
                if (pic != null && !pic.isEmpty()) {
                    String savedPicName = myFileUtils.makeRandomFileName(pic);
                    picNameList.add(savedPicName);
                    String filePath = String.format("%s/%s", middlePath, savedPicName); // 중복 경로 수정

                    try {
                        myFileUtils.transferTo(pic, filePath);
                    } catch (IOException e) {
                        throw new RuntimeException("여행기 사진 저장에 실패했습니다.", e);
                    }
                }
            }

            if (!picNameList.isEmpty()) {
                tripReviewMapper.insTripReviewPic(dto.getTripReviewId(), picNameList);
            } else {
                System.out.println("저장할 사진이 없음!");
            }
        }

        return result;
    }

    //여행기 삭제


    // 여행기 추천
    public int insTripLike(TripLikeDto like) {
        return tripReviewMapper.insTripLike(like);
    }

    public int delTripLike(TripLikeDto like) {
        return tripReviewMapper.delTripLike(like);
    }

    public int getTripLikeCount(Long tripReviewId) {
        return Optional.ofNullable(tripReviewMapper.tripLikeCount(tripReviewId)).orElse(0);
    }
}
