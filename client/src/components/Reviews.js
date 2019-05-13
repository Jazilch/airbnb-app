'use es6';

import React from 'react';
import { Col } from 'antd';
import { StyledH3 } from '../styles';
import ReviewRating from './ReviewRating';

const Reviews = ({ listing }) => {
  return (
    <div>
      <StyledH3>{`${listing.number_of_reviews} Reviews`}</StyledH3>
      <Col span={12}>
        <ReviewRating name="Accuracy" value={listing.review_scores_accurary} />
        <ReviewRating
          name="Communication"
          value={listing.review_scores_communication}
        />
        <ReviewRating
          name="Cleanliness"
          value={listing.review_scores_cleanliness}
        />
      </Col>
      <Col span={12}>
        <ReviewRating name="Location" value={listing.review_scores_location} />
        <ReviewRating name="Check-in" value={listing.review_scores_checkin} />
        <ReviewRating name="Value" value={listing.review_scores_value} />
      </Col>
    </div>
  );
};

export default Reviews;
