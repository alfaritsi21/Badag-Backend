const connection = require("../config/mysql")

module.exports = {

    getSkillByUserId: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM skills WHERE id_user = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
}

