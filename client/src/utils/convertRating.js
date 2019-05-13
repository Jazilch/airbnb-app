'use es6';

const convertRating = rating => {
  return rating > 10 ? rating / 20 : (rating * 10) / 20;
};

export default convertRating;
