const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../../helper')
const { check_email_worker, post_worker, check_email_recruiter, post_recruiter } = require('../../model/auth/Register')

module.exports = {
  register_worker: async (request, response) => {
    const { name, email, phone, password, re_password } = request.body
    const salt = bcrypt.genSaltSync(10)
    const password_encrypt = bcrypt.hashSync(password, salt)
    const form_data = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_password: password_encrypt,
      user_status: 0,
      user_created_at: new Date()
    }
    try {
      const check_email = await check_email_worker(form_data.user_email)
      if (form_data.user_name === '') {
        return helper.response(response, 400, 'Name must be filled')
      } else if (form_data.user_email === '' || form_data.user_email.search('@') < 0) {
        return helper.response(response, 400, 'Email must be filled and must valid email')
      } else if (check_email.length > 0) {
        return helper.response(response, 400, 'Email has already registered')
      } else if (form_data.user_phone === '') {
        return helper.response(response, 400, 'Phone must be filled')
      } else if (password.length < 8) {
        return helper.response(response, 400, 'Password must up to 8 character')
      } else if (password != re_password) {
        return helper.response(response, 400, "Password doesn't match")
      } else {
        const data_result = await post_worker(form_data)
        return helper.response(response, 200, 'Register Success', data_result)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request')
    }
  },
  register_recruiter: async (request, response) => {
    const { name, email, company_name, position, phone, password, re_password } = request.body
    const salt = bcrypt.genSaltSync(10)
    const password_encrypt = bcrypt.hashSync(password, salt)
    const form_data = {
      company_username: name,
      company_email: email,
      company_name: company_name,
      company_position: position,
      company_phone: phone,
      company_password: password_encrypt,
      company_status: 0,
      company_created_at: new Date()
    }
    console.log(form_data)
    try {
      const check_email = await check_email_recruiter(form_data.company_email)
      if (form_data.company_username === '') {
        return helper.response(response, 400, 'Name must be filled')
      } else if (form_data.company_email === '' || form_data.company_email.search('@') < 0) {
        return helper.response(response, 400, 'Email must be filled and must valid email')
      } else if (check_email.length > 0) {
        return helper.response(response, 400, 'Email has already registered')
      } else if (form_data.company_name === '') {
        return helper.response(response, 400, 'Company Name must be filled')
      } else if (form_data.company_position === '') {
        return helper.response(response, 400, 'Position must be filled')
      } else if (form_data.user_phone === '') {
        return helper.response(response, 400, 'Phone must be filled')
      } else if (password.length < 8) {
        return helper.response(response, 400, 'Password must up to 8 character')
      } else if (password != re_password) {
        return helper.response(response, 400, "Password doesn't match")
      } else {
        const data_result = await post_recruiter(form_data)
        return helper.response(response, 200, 'Register Success', data_result)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request')
    }
  }
}