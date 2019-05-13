'use es6';

import React from 'react';
import { StyledH3 } from '../styles';
import cleanString from '../utils/cleanString';

const Amenities = ({ amenities }) => {
  if (!amenities) {
    return 'Loading...';
  }
  const cleanedAmenities = cleanString(amenities);
  return (
    <div>
      <StyledH3>Amenities</StyledH3>
      <ul style={{ columnCount: '2' }}>
        {cleanedAmenities.map(amenity => (
          <li>{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
