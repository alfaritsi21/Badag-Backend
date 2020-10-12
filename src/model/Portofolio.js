const connection = require("../config/mysql")

module.exports = {

    getPortofolioByUserId: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM Portofolio WHERE user_id = ?", id, (error, result) => {
                console.log(error)
                console.log(result)
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },

    postPortofolio: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO Portofolio SET ?", data, (error, result) => {
                if (!error) {
                    const newResult = {
                        id: result.insertId,
                        ...data,
                    };
                    resolve(newResult);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },

    getPortofolioById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM Portofolio WHERE portofolio_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },

    deletePortofolio: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "DELETE FROM Portofolio WHERE portofolio_id = ?",
                id,
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            id: id,
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

