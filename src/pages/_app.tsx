import type { AppProps } from 'next/app';
import Head from 'next/head';
import { css } from '@emotion/css';
import '../styles/globals.css';
import '../styles/pokemon-font.css';

import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';

import { Provider } from 'react-redux';
import store from '@/store';

const style = css`
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
  box-sizing: border-box;
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>ポケモン種族値クイズ</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="ポケモン種族値クイズに挑戦しよう！" />
      <meta property="og:title" content="ポケモン種族値クイズ" />
      <meta
        property="og:description"
        content="ポケモン種族値クイズに挑戦しよう！"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content="https://pokemon-shuzokuchi-quiz.firebaseapp.com/img/thumbnail.png"
      />
      <meta name="twitter:site" content="@poke_kiyomaro" />
    </Head>
    <div className={style}>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </div>
  </>
);

export default MyApp;
