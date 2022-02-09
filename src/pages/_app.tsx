import { ThemeProvider } from "@emotion/react";
import { StylesProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PokemonsContextProvider } from "@/contexts/PokemonsContextProvider";
import { QuizConditionContextProvider } from "@/contexts/QuizConditionContextProvider";
import { QuizContextProvider } from "@/contexts/QuizContextProvider";
import { ResultContextProvider } from "@/contexts/ResultContextProvider";
import { theme } from "@/styles/theme";
import "@/styles/reset.css";
import "@/styles/pokemon-font/pokemon-font.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>ポケモン種族値クイズ</title>
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
        content="https://pokemon-shuzokuchi-quiz.firebaseapp.com/img/thumbnail.png"
        name="twitter:image"
      />
      <meta content="@poke_kiyomaro" name="twitter:site" />
    </Head>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <PokemonsContextProvider>
          <QuizConditionContextProvider>
            <QuizContextProvider>
              <ResultContextProvider>
                <Header />
                <Component {...pageProps} />
              </ResultContextProvider>
            </QuizContextProvider>
          </QuizConditionContextProvider>
        </PokemonsContextProvider>
        <Footer />
      </StylesProvider>
    </ThemeProvider>
  </>
);

export default MyApp;
