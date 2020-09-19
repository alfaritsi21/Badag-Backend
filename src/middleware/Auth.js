const jwt = require("jsonwebtoken");
const helper = require("../helper/index.js");

module.exports = {
  authUser: (request, response, next) => {
    let token = request.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      jwt.verify(token, "SECRETS", (error, result) => {
        if (
          (error && error.name === "jsonwebTokenError") ||
          (error && error.name === "TokenExpiredError")
        ) {
          console.log("Yang ini A");
          console.log(error.expiredAt);
          return helper.response(response, 403, error.message);
        } else {
          if (result.user_status !== 0) {
            console.log(result);
            request.token = result;
            next();
          } else {
            console.log(result);
            return helper.response(
              response,
              400,
              "Invalid action, status inactive"
            );
          }
        }
      });
    } else {
      return helper.response(response, 400, "Please Login First !");
    }
  },
};
