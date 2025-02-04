package com.green.project_quadruaple.tripreview.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class TripReviewGetDto {
    private long tripId;
    private String title;
    private String content;
    private int likeCount;
    private List<String> tripReviewPics;
}
