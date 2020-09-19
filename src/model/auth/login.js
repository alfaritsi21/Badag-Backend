const connection = require("../../config/mysql");

module.exports = {

  checkUser: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE user_email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  checkUserCompany: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM company WHERE company_email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  userActivation: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET ? WHERE user_id = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  userCompanyActivation: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE company SET ? WHERE company_id = ?",
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
}
