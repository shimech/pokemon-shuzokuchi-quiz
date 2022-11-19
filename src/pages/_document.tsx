import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link href="/favicon.ico" rel="shortcut icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Kosugi+Maru"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Otomanopee+One"
        rel="stylesheet"
      />
      <meta content="ポケモン種族値クイズに挑戦しよう！" name="description" />
      <meta content="ポケモン種族値クイズ" property="og:title" />
      <meta
        content="ポケモン種族値クイズに挑戦しよう！"
        property="og:description"
      />
      <meta content="summary" name="twitter:card" />
      <meta
        content="https://pokemon-shuzokuchi-quiz.kiyomaro.app/images/thumbnail.png"
        name="twitter:image"
      />
      <meta content="@poke_kiyomaro" name="twitter:site" />
      <link
        href="https://pokemon-shuzokuchi-quiz.kiyomaro.app"
        rel="canonical"
      />
      {/* <!-- Google Tag Manager --> */}
      <script src="/js/gtm.js" />
      {/* <!-- End Google Tag Manager --> */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
