const connection = require('../../config/mysql')

module.exports = {
  check_email_worker: (email) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT user_email FROM users WHERE user_email = ?", email, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  check_email_recruiter: (email) => {
    console.log(email)
    return new Promise((resolve, reject) => {
      connection.query("SELECT company_email FROM company WHERE company_email = ?", email, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  post_worker: (data_form) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", data_form, (error, result) => {
        if (!error) {
          const res = { data_form }
          resolve(res)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  post_recruiter: (data_form) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO company SET ?", data_form, (error, result) => {
        if (!error) {
          const res = { data_form }
          resolve(res)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}