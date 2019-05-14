'use es6';

import React from 'react';
import { Card, Col } from 'antd';
import { DefaultSpinner, StyledListingImage } from '../styles';
import ListingBadge from './ListingBadge';

const ListingCard = ({ listings, isLoading, handleListingClick }) => {
  if (isLoading) {
    return <DefaultSpinner size="large" />;
  }
  return listings.map(listing => (
    <Col key={listing.id} span={8}>
      <Card
        onClick={() => handleListingClick(listing.id)}
        style={{ cursor: 'pointer' }}
        bordered={false}
      >
        <StyledListingImage src={listing.picture_url} alt="" />
        <ListingBadge label="SuperHost" value={listing.host_is_superhost} />
        <ListingBadge label="Instant Book" value={listing.instant_bookable} />
        <span>{listing.room_type}</span>
        <span>{listing.bedrooms} Beds</span>
        <h3>{listing.name}</h3>
        <span>{listing.price} per night </span>
        <br />
        <span>{listing.number_of_reviews}</span>
      </Card>
    </Col>
  ));
};

export default ListingCard;
