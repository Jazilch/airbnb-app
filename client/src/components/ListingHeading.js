'use es6';

import React from 'react';
import HostAvatar from './HostAvatar';
import { StyledH1 } from '../styles';

const ListingHeading = ({ listing }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <StyledH1>{listing.name}</StyledH1>
      <HostAvatar avatar={listing.host_picture_url} />
    </div>
  );
};

export default ListingHeading;
