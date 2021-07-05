import '../styles/globals.css';
import '../styles/pokemon-font.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '@/component/atom/Header';

import { Provider } from 'react-redux';
import store from '@/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>ポケモン種族値クイズ</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="ポケモン種族値クイズに挑戦しよう！" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content="https://pokemon-shuzokuchi-quiz.firebaseapp.com/img/thumbnail.png"
      />
      <meta name="twitter:site" content="@poke_kiyomaro" />
    </Head>
    <Header />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default MyApp;
