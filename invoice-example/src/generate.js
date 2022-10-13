// Generate a PDF from the HTML code in this repo.
//
// Usage:
// ANVIL_API_KEY=your_key npm run generate && open ./output.pdf

import fs from 'fs'
import Anvil from '@anvilco/anvil'
import { render } from '../dist/ssr-entry.js'

const apiKey = process.env.ANVIL_API_KEY

async function getCss() {
  return (await fs.readFileSync('dist/index.css')).toString()
}

async function buildHTMLToPDFPayload () {
  // This returns a Promise.
  const html = await render()
  // We still need to read in a CSS file, but this is extracted from our Vue
  // SFCs and output to the dist directory.
  const css = await getCss()
  return {
    data: {
      html,
      css,
    },
    page: {
      marginLeft: '60px',
      marginRight: '60px',
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
