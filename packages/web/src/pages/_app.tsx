import { FC } from "react"
import { AppProps } from "next/app"

import { SEO } from "../document"
import { Header } from "@components"
import { Auth } from "@contexts"

import "@styles/global.scss"
import "animate.css/animate.min.css"
import { Container } from "@styles/home"

import "react-spring-bottom-sheet/dist/style.css"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Auth>
      <SEO />
      <Header />
      <Container style={{ WebkitTapHighlightColor: "transparent" }}>
        <Component {...pageProps} />
      </Container>
    </Auth>
  )
}

export default App
