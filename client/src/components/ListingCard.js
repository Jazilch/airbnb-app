'use es6';

import React from 'react';
import { Card, Col, Badge } from 'antd';
import { DefaultSpinner } from '../styles';

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
        <img
          style={{
            width: '100% ',
            height: '220px',
            objectFit: 'cover'
          }}
          src={listing.picture_url}
          alt=""
        />
        {listing.host_is_superhost === 't' && (
          <Badge
            style={{ backgroundColor: '#2db7f5', display: 'block' }}
            count="SuperHost"
          />
        )}
        {listing.instant_bookable === 't' && (
          <Badge style={{ backgroundColor: '#87d068' }} count="Instant Book" />
        )}
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
