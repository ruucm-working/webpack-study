import React from "react"
import { createRoot } from 'react-dom/client';
import "./index.css"

const HelloWorld = () => {
  return <h1>Hello World~~</h1>
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<HelloWorld />);