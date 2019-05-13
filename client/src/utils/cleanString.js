'use es6';

const cleanString = str => {
  str = str.replace(/['"]+/g, '');
  str = str.replace('{', '');
  str = str.replace('}', '');
  return str.split(',');
};

export default cleanString;
