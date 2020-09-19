const connection = require("../../config/mysql")

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
}