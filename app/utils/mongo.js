'use strict'
const Mongodb = require('@pick-star/cli-mongodb')

const { mongodbUrl, mongoDbName } = require('../../config/db')

console.log('#', mongodbUrl)
function mongo() {
    return new Mongodb(mongodbUrl, mongoDbName)
}

module.exports = mongo