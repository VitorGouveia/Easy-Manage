import Document, { Html, Head, Main, NextScript } from "next/document"

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <NextScript />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
