const helper = require("../helper/index")
const { postSkill, getSkillByUserId, getSkillById, deleteSkill } = require("../model/skill")
const { getUserByid } = require("../model/user")

module.exports = {
    addSkillByUserId: async (request, response) => {

        try {
            const { user_id, skill } = request.body
            const checkUser = await getUserByid(user_id)
            if (checkUser.length > 0) {

                const data = {
                    id_user: user_id,
                    skill
                }
                const result = await postSkill(data)
                return helper.response(response, 200, "success add skill", result);
            } else {
                return helper.response(response, 404, "user not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
    getSkillByUserId: async (request, response) => {

        try {
            const { id } = request.params
            const checkUser = await getUserByid(id)
            if (checkUser.length > 0) {
                const result = await getSkillByUserId(id)
                return helper.response(response, 200, "success get skill by id user", result);
            } else {
                return helper.response(response, 404, "user not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
    deleteSkill: async (request, response) => {
            const id = request.params.id
            const skill = request.params.skill
        try {
            const checkId = await getSkillByUserId(id);
            if (checkId.length > 0) {
                const result = await deleteSkill(id, skill);
                return helper.response(response, 200, "Skill Deleted", result);
            } else {
                return helper.response(response, 404, `user id : ${id} not found`);
            }
        } catch (error) {
            console.log(error);
            return helper.response(response, 400, "Bad Request", error);
        }
    },
}