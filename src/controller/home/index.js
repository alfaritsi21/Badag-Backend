const helper = require('../../helper/index')
const qs = require('querystring')
const redis = require('redis')
const client = redis.createClient()
const { get_worker_model, get_worker_count_model } = require('../../model/home/Home')


const getPrevLink = (page, currentQuery) => {
  if (page > 1) {
    const generatedPage = { page: page - 1 }
    const resultPrevLink = { ...currentQuery, ...generatedPage }
    return qs.stringify(resultPrevLink)
  } else { return null }
}
const getNextLink = (page, total_page, currentQuery) => {
  if (page < total_page) {
    const generatedPage = { page: page + 1 }
    const resultNextLink = { ...currentQuery, ...generatedPage }
    return qs.stringify(resultNextLink)
  } else { return null }
}
module.exports = {
  get_worker: async (request, response) => {
    let { page, limit, sort, search } = request.query
    page = parseInt(page)
    limit = parseInt(limit)
    sort_data = ''
    if (sort === 'name') {
      sort_data = 'users.user_name asc'
    } else if (sort === 'skill') {
      sort_data = 'skills.id_user asc'
    } else if (sort === 'location') {
      sort_data = 'users.user_location asc'
    } else if (sort === 'freelance') {
      sort_data = 'users.user_time_job desc'
    } else if (sort === 'fulltime') {
      sort_data = 'users.user_time_job asc'
    } else if (sort === '') {
      sort_data = 'users.user_id asc'
    } else {
      sort_data = 'users.user_id desc'
    }
    let total_data = await get_worker_count_model(sort_data)
    let total_page = Math.ceil(total_data / limit)
    let offset = page * limit - limit
    let prevLink = getPrevLink(page, request.query)
    let nextLink = getNextLink(page, total_page, request.query)
    const page_info = {
      page,
      total_page,
      limit,
      total_data,
      prevLink: prevLink && `${process.env.IP}:${process.env.PORT}/home?${prevLink}`,
      nextLink: nextLink && `${process.env.IP}:${process.env.PORT}/home?${nextLink}`
    }
    try {
      const result = await get_worker_model(limit, offset, sort_data, search)
      client.setex(`get_home,page:${page},limit:${limit},sort:${sort}`, 3600, JSON.stringify(result))
      return helper.response(response, 200, "Get Home Success", result, page_info)
    } catch (error) {
      console.log(sort_data)
      return helper.response(response, 400, "Bad Request", error)
    }
  }
}