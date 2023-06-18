import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> // https://blog.hey3.dev/posts/nextjs-spa
}
