const knex = require('../database');


module.exports = {
  async index(req, res) {
    const results = await knex('users');

    console.log(results)

    return res.status(200).send(results);
  },

  async create(req, res, next) {
    const { username } = req.body;

    try {
      const results = await knex('users').insert({
        username,
      });

      return res.status(201).send(results);

    } catch (error) {
      next(error);
    }

  },

  async update(req, res, next) {
    const { id, username } = req.body;


    try {
      const results = await knex('users').update({
        username
      }).where('id', id)

      return res.send();

    } catch (error) {
      next(error);
    }
  }
}