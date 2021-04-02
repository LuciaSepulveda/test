import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

import App from "./App"
import "./theme.css"

const colors = {
  primary: "#E1EDF2",
  secondary: "#556bf4",
}

const theme = extendTheme({colors})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
