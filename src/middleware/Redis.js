const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");

module.exports = {
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
};