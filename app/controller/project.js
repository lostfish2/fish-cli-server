'use strict';

const { Controller } = require('egg');
const mongo = require('../utils/mongo')


class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await mongo().query('project')
    ctx.body = data;
  }
  async getRedis() {
    const { ctx, app } = this;
    let data = await app.redis.get('test');
    console.log(data)
    ctx.body = 'aaaaaaaaaaaa'
  }
}

module.exports = ProjectController;
