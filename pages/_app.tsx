import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> // SSRとか⇒ https://blog.hey3.dev/posts/nextjs-spa
}

export default appWithTranslation(App);