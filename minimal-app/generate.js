// Generate a PDF from the HTML code in this repo.
//
// Usage:
// ANVIL_API_KEY=your_key npm run generate && open ./output.pdf

import fs from 'fs'
import Anvil from '@anvilco/anvil'
import { renderToString } from 'vue/server-renderer'
import app from './app.js'

const apiKey = process.env.ANVIL_API_KEY

async function getCss () {
  return (await fs.readFileSync('./main.css')).toString()
}

async function buildHTMLToPDFPayload () {
  // This returns a Promise.
  const html = await renderToString(app)
  const css = await getCss()
  return {
    data: {
      html,
      css,
    },
  }
}

async function main () {
  const client = new Anvil({ apiKey })
  const exampleData = await buildHTMLToPDFPayload()

  const { statusCode, data, errors } = await client.generatePDF(exampleData)

  if (statusCode === 200) {
    fs.writeFileSync('output.pdf', data, { encoding: null })
  } else {
    console.log(statusCode, JSON.stringify(errors || data, null, 2))
  }
}

main()
