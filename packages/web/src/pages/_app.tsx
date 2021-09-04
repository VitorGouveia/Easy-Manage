import { FC } from "react"
import { AppProps } from "next/app"
import { ThemeProvider, bitcasinoDark } from "@heathmont/moon-themes"

import { SEO } from "../document"
import { Header } from "@components"
import { Auth } from "@contexts"

import "@styles/global.scss"
import { Container } from "./styles"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Auth>
      <SEO />
      <ThemeProvider theme={bitcasinoDark}>
        <Container style={{ WebkitTapHighlightColor: "transparent" }}>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Auth>
  )
}

export default App
