const helper = require("../helper/index")
const { getSkillByUserId } = require("../model/skill")

const { getUserByid } = require("../model/user")

const redis = require("redis");
const client = redis.createClient();


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
                    job_desk: user[0].user_jobdesk,
                    place: user[0].domisili,
                    work_place: user[0].work_place,
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

    }
}