'use es6';

import React from 'react';
import { Rate } from 'antd';
import convertRating from '../utils/convertRating';

const ReviewRating = ({ name, value }) => {
  return (
    <>
      {value && (
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 15px'
          }}
        >
          <span style={{ marginRight: '15px' }}>{name}</span>
          <Rate
            style={{ marginLeft: 'auto' }}
            allowHalf
            disabled
            defaultValue={convertRating(value)}
          />
        </div>
      )}
    </>
  );
};

export default ReviewRating;
