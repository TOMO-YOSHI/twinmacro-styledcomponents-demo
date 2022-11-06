import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
// import { ServerStyleSheet } from "styled-components"
import { extractCritical } from '@emotion/server'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // const sheet = new ServerStyleSheet()

    // try {
      const initialProps = await Document.getInitialProps(ctx)
      const critical = extractCritical(initialProps.html)
      initialProps.html = critical.html

      // return {
      //   ...initialProps,
      //   styles: (
      //     <>
      //       {initialProps.styles}
      //       {sheet.getStyleElement()}
      //     </>
      //   )
      // };
      initialProps.styles = (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={critical.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: critical.css }}
          />
        </>
      )

      return initialProps
    // } finally {
    //   sheet.seal();
    // }
  }
}

export default MyDocument