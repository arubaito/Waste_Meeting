import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

// SSRとか⇒ https://blog.hey3.dev/posts/nextjs-spa
function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      <Footer />
    </>
  );


}



export default appWithTranslation(App);