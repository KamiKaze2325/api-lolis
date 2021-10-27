__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
async function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}
router.all('/', async (req, res) => {
   res.sendFile(__path + '/api.html')
   })

 router.all('/loli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
 router.all('/shota', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   router.all('/nsfwloli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'Page you are looking for is not found'
        })
})
  

module.exports = router
