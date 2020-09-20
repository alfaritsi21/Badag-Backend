const connection = require("../../config/mysql");

module.exports = {
  new_hiring_notif: (id_worker) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO notification SET ?", id_worker, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  get_notif_worker_model: (id_worker) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT notification.id, notification.title, notification.id_worker, notification.id_company, notification.id_sender, notification.status, company.company_image FROM notification LEFT JOIN company ON company.company_id = notification.id_sender WHERE notification.id_worker = ?", id_worker, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  get_notif_recruter_model: (id_company) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT notification.id, notification.title, notification.id_worker, notification.id_company, notification.id_sender, notification.status, users.user_image FROM notification LEFT JOIN users ON users.user_id = notification.id_sender WHERE notification.id_company = ?", id_company, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  read_notif_worker_model: (id_notif, id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE notification SET status = 1 WHERE id_worker = ? AND id = ?", [id_user, id_notif], (error, result) => {
        if (!error) {
          resolve(id_notif)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  read_notif_recruiter_model: (id_notif, id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE notification SET status = 1 WHERE id_company = ? AND id = ?", [id_user, id_notif], (error, result) => {
        if (!error) {
          resolve(id_notif)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}