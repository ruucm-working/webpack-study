import path from "path"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// @ts-ignore
const req = require.context(DIRNAME, true, /\.(md|mdx|jsx)$/)
// @ts-ignore
const codeContext = require.context(
  // @ts-ignore
  "!!raw-loader!" + DIRNAME,
  true,
  /\.(md|mdx|jsx)$/
)
const routes = req
  .keys()
  .filter((key: any) => !/node_modules/.test(key))
  .map((key: any) => {
    const extname = path.extname(key)
    const name = path.basename(key, extname)
    const exact = name === "index"
    const dirname = path.dirname(key).replace(/^\./, "")
    const pathname = dirname + "/" + (exact ? "" : name)
    let mod, Component
    try {
      mod = req(key)
      Component = mod.default
    } catch (err) {
      console.error(err)
    }
    const code = codeContext(key)
    if (typeof Component !== "function") return null
    return {
      key,
      name,
      extname,
      dirname,
      exact,
      path: pathname,
      Component,
      code,
    }
  })
  .filter(Boolean)

console.log("routes", routes)

const HelloWorld = () => {
  return <h1>Hello World</h1>
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"))
