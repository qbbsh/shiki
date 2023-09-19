import shiki from '@qbbsh/shiki';
import fs from 'node:fs'
import {resolve} from 'path'

(async function () {
  const highlighter = await shiki.getHighlighter({ theme: 'github-dark' })
  const data = fs.readFileSync(resolve(__dirname, './a'), 'utf-8')
  const body = highlighter.ansiToHtml(data)
  fs.writeFileSync(resolve(__dirname, './a.html'), `
  <!DOCTYPE html>
  <html lang="en">
  <style>
      code {
        font-family: 'FiraCode Nerd Font';
      }
    </style>
  <body>
   ${body} 
  </body>
  </html>  
`)

}()).catch((err: Error) => {
  console.error(err)
  process.exit(1)
})