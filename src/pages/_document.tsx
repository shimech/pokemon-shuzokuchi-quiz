import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
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
