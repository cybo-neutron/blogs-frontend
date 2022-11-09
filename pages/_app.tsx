import "../styles/globals.css";
import type { AppProps } from "next/app";

import store from "../store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen text-zinc-200">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
