const connection = require("../../config/mysql");
const { search } = require("../../routes/Home");

module.exports = {
  get_worker_model: (limit, offset, sort, search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT users.user_name, users.user_id, users.user_job, users.user_location, GROUP_CONCAT(skills.skill) AS skills, users.user_image FROM users RIGHT JOIN skills on skills.id_user = users.user_id WHERE skills.skill LIKE '%${search}%' GROUP BY skills.id_user ORDER BY ${sort} LIMIT ? OFFSET ?`,
        [limit, offset],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  get_worker_count_model: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT count(*) as totals FROM users",
        (error, result) => {
          !error ? resolve(result[0].totals) : reject(new Error(error));
        }
      );
    });
  },
};
