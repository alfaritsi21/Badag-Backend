const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/index')
const { request, response } = require('express')

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
  }
}