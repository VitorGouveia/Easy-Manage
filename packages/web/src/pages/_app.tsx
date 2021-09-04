import { FC } from "react"
import { AppProps } from "next/app"
import { ThemeProvider, bitcasinoDark } from "@heathmont/moon-themes"

import { SEO } from "../document"

import "@styles/global.scss"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={bitcasinoDark}>
        <main style={{ WebkitTapHighlightColor: "transparent" }}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
