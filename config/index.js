var config
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  config = require('./prod')
} else {
  config = require('./dev')
}
module.exports = config