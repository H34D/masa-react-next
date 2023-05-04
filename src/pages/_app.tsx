import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MasaProvider } from "@masa-finance/masa-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MasaProvider useRainbowKitWalletConnect>
      <Component {...pageProps} />
    </MasaProvider>
  );
}
