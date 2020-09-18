const connection = require("../../config/mysql");

module.exports = {
  check_email_worker: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT user_email FROM users WHERE user_email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  check_email_recruiter: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT company_email FROM company WHERE company_email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  check_phone_worker: (phone) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT user_phone FROM users WHERE user_phone = ?",
        phone,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  check_phone_recruiter: (phone) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT company_phone FROM company WHERE company_phone = ?",
        phone,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  check_company_name: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM company WHERE company_name = "arqiqcorp"`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  post_worker: (data_form) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO users SET ?",
        data_form,
        (error, result) => {
          if (!error) {
            const res = { result };
            resolve(res);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  post_recruiter: (data_form) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO company SET ?",
        data_form,
        (error, result) => {
          if (!error) {
            const res = { result };
            resolve(res);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};
