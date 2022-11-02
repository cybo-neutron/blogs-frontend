import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-zinc-800 text-zinc-200">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
