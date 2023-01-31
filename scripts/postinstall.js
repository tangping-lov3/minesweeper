const fs = require('fs')
const path = require('path')

const vue = fs.readFileSync(path.join(__dirname, '../node_modules/vue/dist/vue.esm-browser.js'), 'utf8')
const vueDts = fs.readFileSync('../node_modules/@vue/runtime-dom"', 'utf8')

fs.writeFileSync(path.join(__dirname, '../assets/packages/vue.js'), vue)
fs.writeFileSync(path.join(__dirname, '../assets/packages/vue.d.ts'), vueDts)
