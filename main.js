import cloudscraper from 'cloudscraper'
import request from 'request'
import 'dotenv/config'

const url = process.env.URL
const delay = process.env.DELAY
              ? process.env.DELAY * 1000
              : 60000

if (url) {
  success(url, delay)
} else {
  throw new Error('URL was not found. Add value into .env file')
}

import { generateOptions, printStatus, success } from './src/utils.js'

const handler = setInterval(() => {
  let cookie = ''
  let useragent = ''

  cloudscraper.get(url, (error, response) => {
    if (response) {
      const result = JSON.parse(JSON.stringify(response))
      useragent = result.request.headers['User-Agent']
      cookie = result.request.headers.cookie

      printStatus(result.statusCode)
    } else {
      console.error('\x1b[31m%s\x1b[0m', 'the server is down', error.message)
    }

    const options = generateOptions(url, useragent, cookie)

    request(options)
  })
})

setTimeout(() => clearInterval(handler), delay)

process.on('uncaughtException', () => {})
process.on('unhandledRejection', () => {})
