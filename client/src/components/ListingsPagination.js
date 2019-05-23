'use es6';

import React from 'react';
import { Pagination } from 'antd';
import { DEFAULT_PAGE_SIZE } from '../Constants';

const ListingsPagination = ({ listingsCount, page, handlePagination }) => {
  if (listingsCount === 0) {
    return null;
  }
  return (
    <Pagination
      current={page}
      defaultCurrent={1}
      pageSize={DEFAULT_PAGE_SIZE}
      total={listingsCount}
      onChange={handlePagination}
    />
  );
};

export default ListingsPagination;
