const path = require('path')
// require('dotenv').config({
//   path: `environments/.env.${process.env.BUILD_ENV || 'localhost'}`
// })

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  },
  target: 'serverless',
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID
  }
}