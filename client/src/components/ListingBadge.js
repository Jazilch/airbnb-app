'use es6';

import React from 'react';
import { StyledBadge } from '../styles';

const ListingBadge = ({ label, value }) => {
  return (
    <>
      {value === 't' && (
        <StyledBadge count={label} style={{ backgroundColor: '#2db7f5' }} />
      )}
    </>
  );
};

export default ListingBadge;
