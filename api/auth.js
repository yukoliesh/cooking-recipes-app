const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('./utils');

module.exports = (request) => {
  const header = request.req.headers.authorization;
  console.log("checking for auth");

  // not found
  if (!header) return { isAuth: false };

  // token
  const token = header.split(" ");

  // token not found
  if (!token) return { isAuth: false };

  let decodeToken;

  try {
    decodeToken = jwt.verify(token[1], APP_SECRET);
  } catch (err) {
    return { isAuth: false };
  }

  // in case any error found
  if (!!!decodeToken) return { isAuth: false };

  // token decoded successfully, and extracted data
  return { isAuth: true, userId: decodeToken.userId };
};