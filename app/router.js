'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/project/template', controller.project.index);
  router.get('/redis/test', controller.project.getRedis);

  // app.io.of('/')
  app.io.route('build', app.io.controller.build.index);


};


