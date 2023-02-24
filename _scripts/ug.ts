import { resolve } from 'path'
import { promises as fs } from 'fs'
import fetch from 'node-fetch'

const BUILD_DIR = resolve(__dirname, '../build/wechatgame')

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
  for (const file of ugFiles) {
    const content = await fs.readFile(resolve(BUILD_DIR, file))
    const _content = content.toString()
    const nCount = count(_content.matchAll(/\n|\r/g))
    if (nCount < 20) continue

    const data = await ugContent(_content)
    console.log(data)

    try {
      const json = JSON.parse(data)
      if (json.status === 0)
        await fs.writeFile(resolve(BUILD_DIR, file), json.content)
    } catch {}
  }
}

run()
