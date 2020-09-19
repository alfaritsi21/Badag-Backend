const helper = require('../../helper/index')
const redis = require('redis')
const client = redis.createClient()
const { get_worker_model } = require('../../model/home/Home')

module.exports = {
  get_notification: async (request, response) => {
    try {
      const result = await get_notif_model()
      return helper.response(response, 200, "Get Notif Success", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  }
}