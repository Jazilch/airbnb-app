'use es6';

import React from 'react';
import { StyledHostImg } from '../styles';

const HostAvatar = ({ avatar }) => {
  return (
    <div>
      <StyledHostImg src={avatar} alt="" />
    </div>
  );
};

export default HostAvatar;
