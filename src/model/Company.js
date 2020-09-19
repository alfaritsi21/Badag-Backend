const connection = require("../config/mysql")

module.exports = {

    getUserCompanyByid: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM company WHERE company_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    patchUserCompany: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE company SET ? WHERE company_id = ?",
                [setData, id],
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            company_id: id,
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

