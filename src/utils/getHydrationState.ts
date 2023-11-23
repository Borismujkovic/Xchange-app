import { AppProps } from "next/app";

import { DehydratedState } from "@tanstack/react-query";

export type ResultAppProps = AppProps & {
  pageProps: AppProps["pageProps"] & {
    dehydratedState: DehydratedState;
  };

  appState: DehydratedState;
};

export const getHydrateState = (appProps: ResultAppProps): DehydratedState => {
  const { pageProps, appState } = appProps;

  return {
    mutations: [],

    queries: [
      ...(pageProps?.dehydratedState?.queries || []),

      ...(appState?.queries || []),
    ],
  };
};
