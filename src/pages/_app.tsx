import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PokemonsContextProvider } from "@/contexts/PokemonsContextProvider";
import { QuizConditionContextProvider } from "@/contexts/QuizConditionContextProvider";
import { QuizContextProvider } from "@/contexts/QuizContextProvider";
import { ResultContextProvider } from "@/contexts/ResultContextProvider";
import { muiTheme, emotionTheme } from "@/styles/theme";
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
      <meta
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        name="viewport"
      />
      <meta content="ポケモン種族値クイズに挑戦しよう！" name="description" />
      <meta content="ポケモン種族値クイズ" property="og:title" />
      <meta
        content="ポケモン種族値クイズに挑戦しよう！"
        property="og:description"
      />
      <meta content="summary" name="twitter:card" />
      <meta
        content="https://pokemon-shuzokuchi-quiz.firebaseapp.com/images/thumbnail.png"
        name="twitter:image"
      />
      <meta content="@poke_kiyomaro" name="twitter:site" />
      <link
        href="https://pokemon-shuzokuchi-quiz.kiyomaro.app"
        rel="canonical"
      />
    </Head>
    <MUIThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
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
      </EmotionThemeProvider>
    </MUIThemeProvider>
  </>
);

export default MyApp;
