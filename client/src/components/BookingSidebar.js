'use es6';

import React from 'react';
import { Button } from 'antd';
import { StyledSpan, StyledSidebar } from '../styles';

const BookingSidebar = ({ listing }) => {
  return (
    <StyledSidebar>
      <StyledSpan xlarge>{listing.price}</StyledSpan>
      <StyledSpan small>per night</StyledSpan>
      <Button block style={{ margin: '24px 0' }} type="primary" size="large">
        Book now!
      </Button>
    </StyledSidebar>
  );
};

export default BookingSidebar;
