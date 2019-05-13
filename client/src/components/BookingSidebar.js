'use es6';

import React from 'react';
import { Button } from 'antd';

const BookingSidebar = ({ listing }) => {
  return (
    <div
      style={{
        padding: '0 24px',
        border: '1px solid #eee',
        margin: '20px 0 20px 45px'
      }}
    >
      <span style={{ fontSize: '22px' }}>{listing.price}</span>
      <span style={{ fontSize: '12px' }}> per night</span>
      <Button block style={{ margin: '24px 0' }} type="primary" size="large">
        Book now!
      </Button>
    </div>
  );
};

export default BookingSidebar;
