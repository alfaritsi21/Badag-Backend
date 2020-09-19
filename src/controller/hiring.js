const helper = require("../helper/index")

const { getJobTypeById } = require("../model/jobType")
const { postRoomChat, postMessage } = require("../model/hiring")

module.exports = {
    postMessageHiring: async (request, response) => {
        try {
            const { user_id, company_id, jobType_id, name, email, phone, message } = request.body
            if (name !== "") {
                if (email.search("@") > 0) {
                    if (phone !== "") {
                        if (message !== "") {

                            const meething_id = Math.floor(Math.random() * 10000)

                            const userCreate = {
                                id_roomchat: meething_id,
                                user_id,
                                company_id,
                                created_at: new Date
                            }
                            await postRoomChat(userCreate)


                            const jobType = await getJobTypeById(jobType_id)

                            // message
                            const data = {
                                receive: user_id,
                                sender: company_id,
                                roomchat_id: meething_id,
                                message: `From : ${name}</br> ${jobType[0].job_name}   contact : ${email}, ${phone}. <br> <p>${message}<p>`,
                                created_at: new Date
                            }

                            await postMessage(data)


                            // console.log(result)
                            return helper.response(response, 200, "Hire message send success", data);
                        } else {
                            return helper.response(response, 400, "please input description");
                        }
                    } else {
                        return helper.response(response, 400, "please insert phone");
                    }
                } else {
                    return helper.response(response, 400, "please insert invalid email");
                }
            } else {
                return helper.response(response, 400, "please insert name");
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }

    }
}