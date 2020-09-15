const connection = require("../../config/mysql")

module.exports = {
    checkUser: (email) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_id, user_email, user_name, user_phone, user_password, user_status FROM users WHERE user_email = ?",
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
                "SELECT company_id, company_email, company_username, company_name, company_position, company_phone, company_password, company_status FROM company WHERE company_email = ?",
                email,
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error));
                }
            );
        });
    },
}