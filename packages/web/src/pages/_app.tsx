import { FC } from "react"
import { AppProps } from "next/app"
import { ThemeProvider, bitcasinoDark } from "@heathmont/moon-themes"

import { SEO } from "../document"

import "@styles/global.scss"
import { Container } from "./styles"
import { Header } from "@components"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={bitcasinoDark}>
        <Container style={{ WebkitTapHighlightColor: "transparent" }}>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
