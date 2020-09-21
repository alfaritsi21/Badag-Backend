const helper = require("../helper/index")

const { getUserCompanyByid, patchUserCompany } = require("../model/Company")

const redis = require("redis");
const client = redis.createClient();
const fs = require("fs");

module.exports = {
    getCompanyid: async (request, response) => {
        try {
            const { id } = request.params

            const company = await getUserCompanyByid(id)
            if (company.length > 0) {
                const {
                    company_id,
                    company_username,
                    company_email,
                    company_image,
                    company_cover_image,
                    company_name,
                    company_position,
                    company_phone,
                    company_place,
                    company_field,
                    company_description,
                    company_instagram,
                    company_linkedin,
                    company_created_at
                } = company[0]

                const dataSet = {
                    company_id,
                    company_username,
                    company_email,
                    company_image,
                    company_cover_image,
                    company_name,
                    company_position,
                    company_phone,
                    company_place,
                    company_field,
                    company_description,
                    company_instagram,
                    company_linkedin,
                    company_created_at
                }



                client.setex(`getcompanybyid:${id}`, 3600, JSON.stringify(dataSet));
                return helper.response(response, 200, `Success get company id ${id}`, dataSet);

            } else {
                return helper.response(response, 200, `data company id ${id} not found`);
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }

    },

    updateImageProfileCompany: async (request, response) => {
        try {
            const { id } = request.params
            const company = await getUserCompanyByid(id)
            if (company.length > 0) {
                let image = request.file === undefined ? "" : request.file.filename
                // if (image !== "") {
                if (company[0].company_image === "") {
                    const setData = {
                        company_image: image
                    }
                    const result = await patchUserCompany(setData, id);
                    return helper.response(response, 200, "profile image company success updated", result);
                } else {

                    fs.unlink(`./uploads/${company[0].company_image}`, async (err) => {
                        if (err) {
                            throw err;
                        } else {
                            const setData = {
                                company_image: image,
                                company_updated_at: new Date
                            }

                            const result = await patchUserCompany(setData, id);
                            return helper.response(response, 200, "profile image company success updated", result);
                        }
                    });
                }
                // } else {
                //     return helper.response(response, 200, `please upload new profile first`);
                // }
            } else {
                return helper.response(response, 200, `data user id ${id} not found`);
            }

        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },

    updateCoverCompany: async (request, response) => {
        try {
            const { id } = request.params
            const company = await getUserCompanyByid(id)
            if (company.length > 0) {
                let image = request.file === undefined ? "" : request.file.filename
                // if (image !== "") {
                if (company[0].company_cover_image === "") {
                    const setData = {
                        company_cover_image: image
                    }
                    const result = await patchUserCompany(setData, id);
                    return helper.response(response, 200, "profile image company success updated", result);
                } else {

                    fs.unlink(`./uploads/${company[0].company_cover_image}`, async (err) => {
                        if (err) {
                            throw err;
                        } else {
                            const setData = {
                                company_cover_image: image,
                                company_updated_at: new Date
                            }

                            const result = await patchUserCompany(setData, id);
                            return helper.response(response, 200, "cover image company success updated", result);
                        }
                    });
                }
                // } else {
                //     return helper.response(response, 200, `please upload cover image first`);
                // }
            } else {
                return helper.response(response, 200, `data company id ${id} not found`);
            }

        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },


    updateProfileCompany: async (request, response) => {
        try {
            const { id } = request.params
            const { company_name, company_field, company_place, company_description, company_email, company_instagram, company_phone, company_linkedin } = request.body
            const company = await getUserCompanyByid(id)
            if (company.length > 0) {
                if (company_name !== "") {
                    if (company_email !== "") {
                        if (company_email.search("@") > 0) {


                            const setData = {
                                company_name,
                                company_field,
                                company_place,
                                company_description,
                                company_email,
                                company_instagram,
                                company_phone,
                                company_linkedin,
                                company_updated_at: new Date
                            }

                            const result = await patchUserCompany(setData, id)
                            return helper.response(response, 200, `company profile updated`, result);
                        } else {
                            return helper.response(response, 400, `input your valid email`);
                        }
                    } else {
                        return helper.response(response, 400, `email cannot be empty`);
                    }
                } else {
                    return helper.response(response, 400, `company name cannot be empty`);
                }
            } else {
                return helper.response(response, 404, `data company id ${id} not found`);
            }

        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    }
}