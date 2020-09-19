const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");
const { request, response } = require('express');

module.exports = {
  get_home_redis: (request, response, next) => {
    let { page, limit, sort } = request.query
    client.get(`get_home,page:${page},limit:${limit},sort${sort}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, "Get Home Redis Success", JSON.parse(result))
      } else {
        next()
      }
    })
  },
  get_chat_room_company_redis: (request, response, next) => {
    let { company_id } = request.body
    client.get(`get_chatroom_company,company_id:${company_id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, "Get Chat Room Company Redis Success", JSON.parse(result))
      } else {
        next()
      }
    })
  },
  get_chat_room_worker_redis: (request, response, next) => {
    let { user_id } = request.body
    client.get(`get_chatroom_worker,worker_id:${user_id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, "Get Chat Room Redis Worker Success", JSON.parse(result))
      } else {
        next()
      }
    })
  },
  get_chat_room_company_redis: (request, response, next) => {
    let { company_id } = request.body
    client.get(`get_chatroom_company_redis,company_id:${company_id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, "Get Chat Room Redis Worker Success", JSON.parse(result))
      } else {
        next()
      }
    })
  },
  get_message_redis: (request, response, next) => {
    let { roomchat_id } = request.body
    client.get(`get_message,roomchat_id:${roomchat_id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, "Get Message Redis Success", JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getUserByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getuserbyid:${id}`, (error, result) => {
      if (!error && result !== null) {
        console.log('data ada di redis')
        return helper.response(
          response,
          200,
          `Success get user id ${id}`,
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },
  getCompanyByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getcompanybyid:${id}`, (error, result) => {
      if (!error && result !== null) {
        console.log('data ada di redis')
        return helper.response(
          response,
          200,
          `Success get company id ${id}`,
          JSON.parse(result)
        );
      } else {
        next();
      }
    });
  },

  clearDataRedis: (request, response, next) => {
    client.keys("*", (error, keys) => {
      keys.forEach((value) => {
        console.log('clear data redis')
        client.del(value);
      });
      next();
    });
  },

};
