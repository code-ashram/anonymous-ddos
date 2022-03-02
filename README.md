# Anonymous DDOS ![version](https://img.shields.io/badge/version-1.1.0-blue.svg)

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" class="d-block rounded-1 mr-3 flex-shrink-0" alt="javascript logo" width="64" height="64"> <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" class="d-block rounded-1 mr-3 flex-shrink-0" alt="node.js logo" width="64" height="64">  <img src="https://avatars.githubusercontent.com/u/5429470?s=200&v=4" class="d-block rounded-1 mr-3 flex-shrink-0" alt="docker logo" width="64" height="64">

## Installation

- Install [Node.JS](https://nodejs.org/)

- run command `npm ci`

## Options

- open `.env` file
- add url value after `TARGET_URL=`. Example: ```https://example.com``` <span style="color: #FF0000">Required*</span>
- change dps limit value after `ATTACKS_PER_SECOND=`. Default: `0` = unlimited
- change time limit for process `LIFE_TIME_MINUTES=`. Default: `60` = 1 hour
- change proxy address after `PROXY_ADDRESS=` if you need
- save file

## Start

run command `npm start`

## Stop

press `Ctrl + C`

## Run as Docker container:

- Install [Docker](https://www.docker.com)

- Run command `docker-compose up`

## License

[MIT licensed](LICENSE)
