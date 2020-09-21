const helper = require("../../helper/index");
const redis = require("redis");
const client = redis.createClient();
const {
  get_room_chat_company,
  get_room_chat_worker,
  get_message,
  post_message_model,
} = require("../../model/chat/chat");
const { sendNotifMessage } = require("../../model/navbar/Navbar");

module.exports = {
  get_chat_room_company: async (request, response) => {
    let { company_id } = request.body;
    try {
      const result = await get_room_chat_company(company_id);
      client.setex(
        `get_chatroom_company,company_id:${company_id}`,
        3600,
        JSON.stringify(result)
      );
      return helper.response(response, 200, "Get Chat Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  get_chat_room_worker: async (request, response) => {
    let { user_id } = request.body;
    try {
      const result = await get_room_chat_worker(user_id);
      client.setex(
        `get_chatroom_worker,worker_id:${user_id}`,
        3600,
        JSON.stringify(result)
      );
      return helper.response(response, 200, "Get Chat Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  get_message: async (request, response) => {
    let { roomchat_id } = request.body;
    try {
      const result = await get_message(roomchat_id);
      client.setex(
        `get_message,roomchat_id:${roomchat_id}`,
        3600,
        JSON.stringify(result)
      );
      return helper.response(response, 200, "Get Message Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  post_message: async (request, response) => {
    const { send } = request.params;
    let { roomchat_id, sender, receive, message, role_id } = request.body; // company / worker login
    try {
      const setData = {
        roomchat_id: roomchat_id,
        sender: sender,
        receive: receive,
        message: message,
        created_at: new Date(),
      };
      const dataNotif = {
        title: 1,
        id_sender: sender,
        id_worker: role_id === "1" ? receive : null,
        id_company: role_id === "2" ? receive : null,
        status: 0,
      };
      await sendNotifMessage(dataNotif);
      const result = await post_message_model(setData);
      return helper.response(response, 201, "Send Chat Success", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
