const connection = require("../config/mysql")

module.exports = {

    getUserByid: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE user_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getUserCompanyByid: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM company WHERE company_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    patchUser: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE users SET ? WHERE user_id = ?",
                [setData, id],
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            user_id: id,
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

