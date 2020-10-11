const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../../helper");
const mailer = require("../../utilities/mailer");
const mailTemplate = require("../../utilities/mailTemplate");

const {
  check_email_worker,
  post_worker,
  check_email_recruiter,
  post_recruiter,
  check_phone_worker,
  check_phone_recruiter,
  check_company_name,
} = require("../../model/auth/Register");

module.exports = {
  register_worker: async (request, response) => {
    const { name, email, phone, password, re_password } = request.body;
    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(password, salt);
    const form_data = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_password: password_encrypt,
      user_status: 1,
      user_created_at: new Date(),
      role_id: 1,
    };
    try {
      if (form_data.user_name === "") {
        return helper.response(response, 400, "Name must be filled");
      } else if (
        form_data.user_email === "" ||
        form_data.user_email.search("@") < 0
      ) {
        return helper.response(
          response,
          400,
          "Email must be filled and must valid email"
        );
      } else if (form_data.user_phone === null) {
        return helper.response(response, 400, "Phone Number must be filled");
      } else {
        const check_email = await check_email_worker(form_data.user_email);
        const check_phone = await check_phone_worker(form_data.user_phone);
        if (check_email.length > 0) {
          return helper.response(response, 400, "Email has already registered");
        } else if (check_phone.length > 0) {
          return helper.response(
            response,
            400,
            "Phone Number has already registered"
          );
        } else if (password.length < 8) {
          return helper.response(
            response,
            400,
            "Password must up to 8 character"
          );
        } else if (password != re_password) {
          return helper.response(response, 400, "Password doesn't match");
        } else {
          const data_result = await post_worker(form_data);
          // const id = data_result.result.insertId;
          // const link = `process.env.url_frontend`;
          // mailer.send(
          //   "a1.arifrahman.1213@gmail.com",
          //   "Aktivasi woy",
          //   "Haiiiiii",
          //   mailTemplate.activation(link)
          // );
          return helper.response(response, 200, "Register Success", form_data);
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  register_recruiter: async (request, response) => {
    const {
      name,
      email,
      company_name,
      position,
      phone,
      password,
      re_password,
    } = request.body;
    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(password, salt);
    const form_data = {
      company_username: name,
      company_email: email,
      company_name: company_name,
      company_position: position,
      company_phone: phone,
      company_password: password_encrypt,
      company_status: 1,
      company_created_at: new Date(),
      role_id: 2,
    };
    try {
      if (form_data.company_username === "") {
        return helper.response(response, 400, "Name must be filled");
      } else if (
        form_data.company_email === "" ||
        form_data.company_email.search("@") < 0
      ) {
        return helper.response(
          response,
          400,
          "Email must be filled and must valid email"
        );
      } else if (form_data.company_name === "") {
        return helper.response(response, 400, "Company Name must be filled");
      } else if (form_data.company_position === "") {
        return helper.response(response, 400, "Position must be filled");
      } else if (form_data.company_phone === null) {
        return helper.response(response, 400, "Phone must be filled");
      } else {
        const check_email = await check_email_recruiter(
          form_data.company_email
        );
        const check_phone = await check_phone_recruiter(
          form_data.company_phone
        );
        const check_name = await check_company_name(form_data.company_name);
        if (check_email.length > 0) {
          return helper.response(response, 400, "Email has already registered");
        } else if (check_name.length > 0) {
          return helper.response(
            response,
            400,
            "Company Name has already registered"
          );
        } else if (check_phone.length > 0) {
          return helper.response(
            response,
            400,
            "Phone Number has already registered"
          );
        } else if (password.length < 8) {
          return helper.response(
            response,
            400,
            "Password must up to 8 character"
          );
        } else if (password != re_password) {
          return helper.response(response, 400, "Password doesn't match");
        } else {
          const data_result = await post_recruiter(form_data);
          // const id = data_result.result.insertId;
          // const link = `process.env.url_frontend`;
          // mailer.send(
          //   "a1.arifrahman.1213@gmail.com",
          //   "Aktivasi woy",
          //   "Haiiiiii",
          //   mailTemplate.activation(link)
          // );
          return helper.response(response, 200, "Register Success", form_data);
        }
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
