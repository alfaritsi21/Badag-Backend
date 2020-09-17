const connection = require("../config/mysql")

module.exports = {
    getJobTypeById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT * FROM job_type WHERE job_id = ${id}`,
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error));
                }
            );
        });
    },
    getJobTypeAll: () => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT * FROM job_type`,
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error));
                }
            );
        });
    }
}