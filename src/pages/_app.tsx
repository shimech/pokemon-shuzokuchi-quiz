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
import { TimerContextProvider } from "@/contexts/TimerContextProvider";
import { muiTheme, emotionTheme } from "@/styles/theme";
import "@/styles/reset.css";
import "@/styles/pokemon-font/pokemon-font.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>ポケモン種族値クイズ</title>
      <meta
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        name="viewport"
      />
    </Head>
    <MUIThemeProvider theme={muiTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <PokemonsContextProvider>
          <QuizConditionContextProvider>
            <QuizContextProvider>
              <ResultContextProvider>
                <Header />
                <TimerContextProvider>
                  <Component {...pageProps} />
                </TimerContextProvider>
              </ResultContextProvider>
            </QuizContextProvider>
          </QuizConditionContextProvider>
        </PokemonsContextProvider>
        <Footer />
      </EmotionThemeProvider>
    </MUIThemeProvider>
  </>
);

export default App;
