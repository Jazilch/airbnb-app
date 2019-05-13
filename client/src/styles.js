'use es6';

import styled from 'styled-components';
import { Spin } from 'antd';

export const StyledH1 = styled.h1`
  font-size: 40px;
  line-height: 1.25em;
`;

export const StyledH3 = styled.h3`
  border-bottom: 2px solid #eee;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
`;

export const StyledHostImg = styled.img`
  width: 75px;
  border-radius: 50%;
  margin: 5px 15px;
`;

export const DefaultSpinner = styled(Spin)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
