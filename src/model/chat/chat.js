const connection = require("../../config/mysql");

module.exports = {
  get_room_chat_company: (id_recruter) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM roomchat WHERE company_id = ?", id_recruter, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  get_room_chat_worker: (id_worker) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM roomchat WHERE user_id = ?", id_worker, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  get_message: (id_roomchat) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT company.company_id, company.company_name, company.company_image, message.message, message.created_at, message.sender, message.receive, company.role_id AS roleid_company, users.role_id AS roleid_user FROM message INNER JOIN roomchat on roomchat.id_roomchat = message.roomchat_id INNER JOIN company on company.company_id = roomchat.company_id LEFT JOIN users ON users.user_id = roomchat.user_id WHERE roomchat.id_roomchat = ?", id_roomchat, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  post_message_model: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO message SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = { ...setData }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}