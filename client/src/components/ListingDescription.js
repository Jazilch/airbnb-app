'use es6';

import React from 'react';

const ListingDescription = ({ country, roomType, description }) => (
  <div>
    <p>{country}</p>
    <p>{roomType}</p>
    <p>{description}</p>
  </div>
);

export default ListingDescription;
