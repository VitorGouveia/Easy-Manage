import { FC } from "react"
import { AppProps } from "next/app"
import { ThemeProvider, sportsbetDark } from "@heathmont/moon-themes"

import { SEO } from "../document"

import "@styles/global.scss"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={sportsbetDark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
