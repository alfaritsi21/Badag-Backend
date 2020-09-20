const bcrypt = require("bcrypt");

const helper = require("../helper/index");
const { getSkillByUserId } = require("../model/skill");

const {
  getUserByid,
  patchUser,
  resetPasswordUser,
  resetPasswordCompany,
} = require("../model/user");

const redis = require("redis");
const client = redis.createClient();
const fs = require("fs");
const { getExperienceByUserId } = require("../model/Experience");
const { getPortofolioByUserId } = require("../model/Portofolio");
const Experience = require("../model/Experience");

module.exports = {
  getUserid: async (request, response) => {
    try {
      const { id } = request.params;

      const user = await getUserByid(id);
      if (user.length > 0) {
        let dataSkill = [];
        const skill = await getSkillByUserId(id);

        if (skill.length > 0) {
          for (let i = 0; i < skill.length; i++) {
            dataSkill = [...dataSkill, skill[i].skill];
          }
        } else {
          dataSkill = [];
        }

        let dataExperience = [];
        let resign = [];
        const experience = await getExperienceByUserId(id);

        if (experience.length > 0) {
          for (let i = 0; i < experience.length; i++) {
            let resign =
              experience[i].date_resign === null
                ? ""
                : experience[i].date_resign;
            let data = {
              id_company: experience[i].id,
              company: experience[i].company,
              position: experience[i].position,
              date: experience[i].date,
              date_resign: resign,
              description: experience[i].description,
            };
            dataExperience = [...dataExperience, data];
          }
        } else {
          dataExperience = [...dataExperience, "your experience is empty"];
        }

        let dataPortofolio = [];
        const portofolio = await getPortofolioByUserId(id);

        if (portofolio.length > 0) {
          for (let i = 0; i < portofolio.length; i++) {
            let data = {
              id_app: portofolio[i].portofolio_id,
              app_name: portofolio[i].app_name,
              app_type: portofolio[i].type_portofolio,
              image_app: portofolio[i].image_portofolio,
              link_repository: portofolio[i].link_repository,
            };

            dataPortofolio = [...dataPortofolio, data];
          }
        } else {
          dataPortofolio = [...dataPortofolio, "your portofolio is empty"];
        }

        const data = {
          id: id,
          name: user[0].user_name,
          image: user[0].user_image,
          phone: user[0].user_phone,
          email: user[0].user_email,
          job_time: user[0].user_time_job,
          job: user[0].user_job,
          place: user[0].user_location,
          work_location: user[0].user_work_location,
          user_description: user[0].user_description,
          github: user[0].user_github,
          linkedin: user[0].user_linkedin,
          instagram: user[0].user_instagram,
          skills: dataSkill,
          experience: dataExperience,
          portofolio: dataPortofolio,
        };

        client.setex(`getuserbyid:${id}`, 3600, JSON.stringify(data));
        return helper.response(
          response,
          200,
          `Success get user id ${id}`,
          data
        );
      } else {
        return helper.response(response, 200, `data user id ${id} not found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  updateImageProfile: async (request, response) => {
    try {
      const { id } = request.params;
      const user = await getUserByid(id);
      if (user.length > 0) {
        let image = request.file === undefined ? "" : request.file.filename;
        if (image !== "") {
          if (user[0].user_image === "profile.png") {
            const setData = {
              user_image: image,
            };
            const result = await patchUser(setData, id);
            return helper.response(
              response,
              200,
              "profile image success updated",
              result
            );
          } else {
            fs.unlink(`./uploads/${user[0].user_image}`, async (err) => {
              if (err) {
                throw err;
              } else {
                const setData = {
                  user_image: image,
                };
                const result = await patchUser(setData, id);
                return helper.response(
                  response,
                  200,
                  "profile image success updated",
                  result
                );
              }
            });
          }
        } else {
          return helper.response(
            response,
            200,
            `please upload new profile first`
          );
        }
      } else {
        return helper.response(response, 200, `data user id ${id} not found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  updateProfile: async (request, response) => {
    try {
      const { id } = request.params;
      const {
        user_name,
        user_job,
        user_time_job,
        user_location,
        user_work_location,
        user_description,
        user_linkedin,
        user_github,
        user_instagram,
      } = request.body;
      const user = await getUserByid(id);
      if (user.length > 0) {
        if (user_name !== "") {
          if (user_job !== "") {
            if (user_time_job !== "") {
              if (user_location !== "") {
                const setData = {
                  user_name,
                  user_job,
                  user_time_job,
                  user_location,
                  user_work_location,
                  user_linkedin,
                  user_instagram,
                  user_github,
                  user_description,
                };
                const result = await patchUser(setData, id);
                return helper.response(
                  response,
                  200,
                  "user has updated",
                  result
                );
              } else {
                return helper.response(
                  response,
                  200,
                  `input your location first`
                );
              }
            } else {
              return helper.response(response, 200, `input time job first`);
            }
          } else {
            return helper.response(response, 200, `input your job first`);
          }
        } else {
          return helper.response(response, 200, `input name first`);
        }
      } else {
        return helper.response(response, 200, `data user id ${id} not found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  resetPassword: async (request, response) => {
    const { email } = request.params;
    const { user_password, re_password } = request.body;

    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(user_password, salt);

    const setData = {
      user_password: password_encrypt,
    };
    try {
      if (user_password.length < 8) {
        return helper.response(
          response,
          400,
          "Password must up to 8 character"
        );
      } else if (user_password != re_password) {
        return helper.response(response, 400, "Password doesn't match");
      } else {
        const result = await resetPasswordUser(setData, email);

        return helper.response(response, 201, "New Password Added", result);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  resetPasswordComp: async (request, response) => {
    const { email } = request.params;
    const { company_password, re_password } = request.body;

    const salt = bcrypt.genSaltSync(10);
    const password_encrypt = bcrypt.hashSync(company_password, salt);

    const setData = {
      company_password: password_encrypt,
    };
    try {
      if (company_password.length < 8) {
        return helper.response(
          response,
          400,
          "Password must up to 8 character"
        );
      } else if (company_password != re_password) {
        return helper.response(response, 400, "Password doesn't match");
      } else {
        const result = await resetPasswordCompany(setData, email);

        return helper.response(response, 201, "New Password Added", result);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
