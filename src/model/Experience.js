const connection = require("../config/mysql");

module.exports = {
  getExperienceByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id,id_user,company,position, DATE_FORMAT(date, "%Y-%m-%d") AS date_work, DATE_FORMAT(date_resign, "%Y-%m-%d") AS resign, description FROM `experiences` WHERE id_user = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  postExperience: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO experiences SET ?",
        data,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },

  getExperienceById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM experiences WHERE id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },

  deleteExperience: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM experiences WHERE id = ?",
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
};
