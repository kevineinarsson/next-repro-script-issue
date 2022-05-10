import Document, { Main, NextScript, Head, Html } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Voces"
          />
          <Script
            id="DocumentScriptBIHead"
            src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=scriptBeforeInteractiveHead"
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="text" />
          <Script
            id="DocumentScriptBI"
            src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js?a=scriptBeforeInteractiveBody"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
