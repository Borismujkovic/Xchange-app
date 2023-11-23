import "../src/styles/globals.css";
import { AppContext } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  Hydrate,
} from "@tanstack/react-query";

import { UserProvider } from "@/src/store/user";
import { getCookie } from "cookies-next";
import Api from "@/src/api/real-api";
import { ResultAppProps, getHydrateState } from "@/src/utils/getHydrationState";

const client = new QueryClient();

function App(props: ResultAppProps) {
  const { Component, pageProps } = props;

  // console.log(props);
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={getHydrateState(props)}>
        <UserProvider>
          <Component {...pageProps} />;
        </UserProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const queryClient = new QueryClient();
  const { req, res } = ctx;

  const jwt = getCookie("jwt", { req, res }) as string;

  if (jwt) {
    Api.setToken(jwt);
    await queryClient.prefetchQuery(["user"], Api.getUserData);
  }

  // console.log({ appState: dehydrate(queryClient) });

  return {
    appState: dehydrate(queryClient),
  };
};

export default App;
