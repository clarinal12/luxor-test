import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "theme";
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";
import Head from "next/head";
import "swiper/css/swiper.min.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Luxor Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
