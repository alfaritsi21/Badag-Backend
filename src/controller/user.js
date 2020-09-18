const helper = require("../helper/index")
const { getSkillByUserId } = require("../model/skill")

const { getUserByid, patchUser } = require("../model/user")

const redis = require("redis");
const client = redis.createClient();
const fs = require("fs");

module.exports = {
    getUserid: async (request, response) => {
        try {
            const { id } = request.params

            const user = await getUserByid(id)
            if (user.length > 0) {
                let dataSkill = []
                const skill = await getSkillByUserId(id)
                for (let i = 0; i < skill.length; i++) {
                    dataSkill = [...dataSkill, skill[i].skill]
                }

                const data = {
                    name: user[0].user_name,
                    image: user[0].user_image,
                    phone: user[0].user_phone,
                    email: user[0].user_email,
                    job_time: user[0].user_time_job,
                    job: user[0].user_job,
                    place: user[0].user_location,
                    work_location: user[0].user_work_location,
                    user_description: user[0].user_description,
                    skills: dataSkill
                }
                client.setex(`getuserbyid:${id}`, 3600, JSON.stringify(data));
                return helper.response(response, 200, `Success get user id ${id}`, data);
            } else {
                return helper.response(response, 200, `data user id ${id} not found`);
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }

    },

    updateImageProfile: async (request, response) => {
        try {
            const { id } = request.params
            const user = await getUserByid(id)
            if (user.length > 0) {
                let image = request.file === undefined ? "" : request.file.filename
                if (image !== "") {
                    if (user[0].user_image === "profile.png") {
                        const setData = {
                            user_image: image
                        }
                        const result = await patchUser(setData, id);
                        return helper.response(response, 200, "profile image success updated", result);
                    } else {
                        console.log(user[0].user_image)
                        fs.unlink(`./uploads/${user[0].user_image}`, async (err) => {
                            if (err) {
                                throw err;
                            } else {
                                const setData = {
                                    user_image: image
                                }

                                const result = await patchUser(setData, id);
                                return helper.response(response, 200, "profile image success updated", result);
                            }
                        });
                    }
                } else {
                    return helper.response(response, 200, `please upload new profile first`);
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
            const { id } = request.params
            const { user_name, user_job, user_location, user_work_location, user_description } = request.body
            const user = await getUserByid(id)
            if (user.length > 0) {
                if (user_name !== "") {
                    if (user_job !== "") {
                        if (user_location !== "") {
                            if (user_work_location) {
                                const setData = {
                                    user_name,
                                    user_job,
                                    user_location,
                                    user_work_location,
                                    user_description
                                }
                                const result = await patchUser(setData, id);
                                return helper.response(response, 200, "user has updated", result);
                            } else {
                                return helper.response(response, 200, `input work place first`);
                            }
                        } else {
                            return helper.response(response, 200, `input jobdesk first`);
                        }
                    } else {
                        return helper.response(response, 200, `input jobdesk first`);
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
    }
}