const connection = require("../config/mysql")

module.exports = {

    getSkillByUserId: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM skills WHERE id_user = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },

    postSkill: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO skills SET ?", data, (error, result) => {
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

    getSkillById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM skills WHERE id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },

    deleteSkill: (id, skill) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `DELETE FROM skills WHERE id_user = ? && skill = '${skill}'`,
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

