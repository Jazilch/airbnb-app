'use es6';

import React from 'react';
import convertRating from '../utils/convertRating';
import { FlexWrapper, StyledRate } from '../styles';

const ReviewRating = ({ name, value }) => {
  return (
    <>
      {value && (
        <FlexWrapper align="center" style={{ margin: '0 15px' }}>
          <span style={{ marginRight: '15px' }}>{name}</span>
          <StyledRate allowHalf disabled defaultValue={convertRating(value)} />
        </FlexWrapper>
      )}
    </>
  );
};

export default ReviewRating;
