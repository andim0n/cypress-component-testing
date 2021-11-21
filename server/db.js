// import fs from 'fs-extra'
// import path from 'path'
const fs = require('fs-extra')
const path = require('path')

const filePath = path.join(__dirname, 'db.json')

exports.seed = data => {
  return fs.outputJson(filePath, data)
}

exports.getPosts = () => {
  return fs.readJson(filePath).then((data = {}) => {
    return data.posts
  })
}
