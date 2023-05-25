import { resolve } from 'path'
import { promises as fs } from 'fs'
import { log } from 'console'
import fetch from 'node-fetch'
import * as fg from 'fast-glob'

function sleep(ms = 5000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const BUILD_DIR = resolve(__dirname, '../build/wechatgame')
log(fg)
const files = fg.default.sync('**/*.js', { cwd: BUILD_DIR })
log(files)
const ugFiles = ['game.js', 'first-screen.js', 'application.js']

async function ugContent(content: string) {
  return fetch('http://www.jshaman.com:800/submit_js_code/', {
    method: 'POST',
    body: JSON.stringify({
      js_code: content,
      vip_code: 'free'
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then(res => res.text())
}

function count(it: IterableIterator<RegExpMatchArray>) {
  let count = 0
  for (const _ of it)
    count++
  return count
}

async function run() {
  for (const file of files) {
    const content = await fs.readFile(resolve(BUILD_DIR, file))
    const _content = content.toString()
    // const nCount = count(_content.matchAll(/\n|\r/g))
    if (_content.endsWith('ug ok')) continue
    await sleep()
    const data = await ugContent(_content)
    console.log(data)

    try {
      const json = JSON.parse(data)
      if (json.status === 0)
        await fs.writeFile(resolve(BUILD_DIR, file), `${json.content}\n\/\/ ug ok`)
      else
        console.log(file)
    } catch {}
  }
}

run()
