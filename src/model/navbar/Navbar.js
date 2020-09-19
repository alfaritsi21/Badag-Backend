const connection = require("../../config/mysql");

module.exports = {
  get_notif_model: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT", (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  }
}