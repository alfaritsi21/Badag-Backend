const helper = require("../helper/index")
const fs = require("fs");
const { postPortofolio, getPortofolioById, getPortofolioByUserId, deletePortofolio } = require("../model/Portofolio")
const { getUserByid } = require("../model/user")

module.exports = {
    addPortofolioByUserId: async (request, response) => {

        try {
            const { user_id, app_name, link_repository, type_portofolio } = request.body
            const checkUser = await getUserByid(user_id)
            if (checkUser.length > 0) {
                if (app_name !== "") {
                    if (link_repository !== "") {
                        let image = request.file === undefined ? "" : request.file.filename

                        if (image !== "") {
                            const data = {
                                user_id,
                                app_name,
                                link_repository,
                                type_portofolio,
                                image_portofolio: image
                            }
                            const result = await postPortofolio(data)
                            return helper.response(response, 200, "success add portofolio", result);
                        } else {
                            return helper.response(response, 400, "upload image portofolio");
                        }
                    } else {
                        return helper.response(response, 400, "input link repository");
                    }
                } else {
                    return helper.response(response, 400, "input app name");
                }

            } else {
                return helper.response(response, 404, "user not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },

    getPortofolioById: async (request, response) => {
        try {
            const { id } = request.params
            const check = await getPortofolioById(id)
            if (check.length > 0) {
                return helper.response(response, 200, "success get portofolio by id", check);
            } else {
                return helper.response(response, 404, "portofolio not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },

    getPortofolioByUserId: async (request, response) => {

        try {
            const { id } = request.params
            const checkUser = await getUserByid(id)
            if (checkUser.length > 0) {
                const result = await getPortofolioByUserId(id)
                return helper.response(response, 200, "success get portofolio by id user", result);
            } else {
                return helper.response(response, 404, "user not found");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
    deletePortofolio: async (request, response) => {
        try {
            const id = request.params.id;
            const checkId = await getPortofolioById(id);
            if (checkId.length > 0) {
                fs.unlink(`./uploads/${checkId[0].image_portofolio}`, async (err) => {
                    if (err) {
                        throw err;
                    } else {
                        const result = await deletePortofolio(id);

                        return helper.response(response, 200, "Portofolio Deleted", result);
                    }
                });
            } else {
                return helper.response(response, 404, `Portofolio id : ${id} not found`);
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
}