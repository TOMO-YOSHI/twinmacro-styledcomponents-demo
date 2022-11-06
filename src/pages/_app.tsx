// import '../styles/globals.css'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
