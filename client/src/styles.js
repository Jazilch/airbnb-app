'use es6';

import styled from 'styled-components';
import { Spin, Badge, Rate } from 'antd';

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

export const StyledUl = styled.ul`
  column-count: 2;
`;

export const StyledSpan = styled.span`
  ${props => props.small && 'font-size: 12px'}
  ${props => props.medium && 'font-size: 16px'}
  ${props => props.large && 'font-sze: 20px'}
  ${props => props.xlarge && 'font-size: 22px'}
`;

export const StyledSidebar = styled.div`
  padding: 0 24px;
  border: 1px solid #eee;
  margin: 20px 0 20px 45px;
`;

export const StyledBadge = styled(Badge)`
  display: block;
`;

export const StyledListingImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const FlexWrapper = styled.div`
  display: flex;
  ${props => props.justify === 'center' && 'justify-content: center'}
  ${props =>
    props.justify === 'space-around' && 'justify-content: space-around'}
  ${props =>
    props.justify === 'space-between' && 'justify-content: space-between'}
 ${props => props.flexFlow === 'row wrap' && 'flex-flow: row wrap'}
 ${props => props.align === 'center' && 'align-items: center'}
`;

export const StyledRate = styled(Rate)`
  margin-left: auto;
`;

export const StyledBannerImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 25px;
`;
