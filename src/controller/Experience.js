const helper = require("../helper/index")
const { getExperienceById, getExperienceByUserId, postExperience, deleteExperience } = require("../model/Experience")
const { getUserByid } = require("../model/user")

module.exports = {
    addExperinceByUserId: async (request, response) => {
        try {
            const { user_id, position, company_name, date, date_resign, description } = request.body
            if (position !== "") {
                if (company_name !== "") {
                    if (date !== "") {
                        const checkUser = await getUserByid(user_id)
                        if (checkUser.length > 0) {

                            const data = {
                                id_user: user_id,
                                position,
                                company: company_name,
                                date,
                                date_resign,
                                description
                            }
                            const result = await postExperience(data)
                            return helper.response(response, 200, "success add experience", result);
                        } else {
                            return helper.response(response, 404, "user not found");
                        }
                    } else {
                        return helper.response(response, 400, "input date first");
                    }
                } else {
                    return helper.response(response, 400, "input company name first");
                }
            } else {
                return helper.response(response, 400, "input position first");
            }

        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },

    getExperienceByUserId: async (request, response) => {

        try {
            const { id } = request.params
            const checkUser = await getUserByid(id)
            if (checkUser.length > 0) {
                const result = await getExperienceByUserId(id)
                return helper.response(response, 200, "success get Experience by id user", result);
            } else {
                return helper.response(response, 404, "user not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
    deleteExperience: async (request, response) => {
        try {
            const id = request.params.id;
            const checkId = await getExperienceById(id);
            if (checkId.length > 0) {

                const result = await deleteExperience(id);
                return helper.response(response, 200, "Experience Deleted", result);
            } else {
                return helper.response(response, 404, `Experience id : ${id} not found`);
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },

}