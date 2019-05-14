'use es6';

import React from 'react';
import { StyledH3, StyledUl } from '../styles';
import cleanString from '../utils/cleanString';

const Amenities = ({ amenities }) => {
  if (!amenities) {
    return 'Loading...';
  }
  const cleanedAmenities = cleanString(amenities);
  return (
    <div>
      <StyledH3>Amenities</StyledH3>
      <StyledUl>
        {cleanedAmenities.map(amenity => (
          <li>{amenity}</li>
        ))}
      </StyledUl>
    </div>
  );
};

export default Amenities;
