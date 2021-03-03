import type { AppProps /*, AppContext */ } from 'next/app'

import "../styles/globals.scss"

function CodeTest({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CodeTest
