package com.green.project_quadruaple.tripreview.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TripLikeDto {
    @Schema(example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private long userId;
    @Schema(example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private long tripReviewId;
}
