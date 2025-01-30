package com.green.project_quadruaple.review.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.common.model.ResultResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewPostRes extends ResultResponse {
    public ReviewPostRes() {
        super(ResponseCode.OK.getCode());
    }

    @JsonProperty("review_id")
    private long reviewId;
}
