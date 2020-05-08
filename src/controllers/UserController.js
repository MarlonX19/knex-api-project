const knex = require('../database');


module.exports = {
    async index(req, res) {
        const results = await knex('users');

        console.log(results)

        return res.status(200).send(results);
    }
}