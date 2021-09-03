import { FC } from "react"
import Head from "next/head"

export const SEO: FC = (): JSX.Element => {
  return (
    <Head>
      <title>FastGás Inventory</title>

      <meta charSet="utf-8" />
      <meta
        name="description"
        content="The front-end of the FastGas inventory app"
      />
      <meta name="keywords" content="Inventory, Managment, Stock" />
      <meta name="author" content="Vitor Gouveia" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"
      />

      {/* SEO */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="apple-mobile-web-app-title" content="FastGas" />
      <meta name="application-name" content="FastGas" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-TileImage"
        content="/icons/mstile-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
