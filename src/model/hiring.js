const connection = require("../config/mysql");

module.exports = {
  postRoomChat: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO roomchat SET ?`, data, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  postMessage: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO message SET ?", data, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
};
