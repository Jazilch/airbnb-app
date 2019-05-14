'use es6';

import React from 'react';
import HostAvatar from './HostAvatar';
import { StyledH1, FlexWrapper } from '../styles';

const ListingHeading = ({ listing }) => {
  return (
    <FlexWrapper justify="space-between">
      <StyledH1>{listing.name}</StyledH1>
      <HostAvatar avatar={listing.host_picture_url} />
    </FlexWrapper>
  );
};

export default ListingHeading;
