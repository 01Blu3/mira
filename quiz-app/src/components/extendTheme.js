import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  fonts: {
    title: "'MyCustomFont', sans-serif",
    center: "'MyCustomFont', serif",
    footer: "'MyCustomFont', serif",
    // you can also specify other font weights and styles if needed
  },
})

export default customTheme;