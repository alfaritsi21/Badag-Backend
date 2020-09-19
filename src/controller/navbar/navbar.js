const helper = require('../../helper/index')
const { get_notif_worker_model, get_notif_recruter_model, read_notif_recruiter_model, read_notif_worker_model } = require('../../model/navbar/Navbar')

module.exports = {
  get_notification_worker: async (request, response) => {
    let { id_user } = request.body
    try {
      const result = await get_notif_worker_model(id_user)
      return helper.response(response, 200, "Get Notif Worker Success", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  get_notification_recruter: async (request, response) => {
    let { id_user } = request.body
    try {
      const result = await get_notif_recruter_model(id_user)
      return helper.response(response, 200, "Read notif recruter Success", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  read_notif_worker: async (request, response) => {
    let { id_notif, id_user } = request.body
    try {
      const result = await read_notif_worker_model(id_notif, id_user)
      return helper.response(response, 200, "Read notif worker Success", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  },
  read_notif_company: async (request, response) => {
    let { id_notif, id_user } = request.body
    try {
      const result = await read_notif_recruiter_model(id_notif, id_user)
      return helper.response(response, 200, "Read notif company Success", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  }
}