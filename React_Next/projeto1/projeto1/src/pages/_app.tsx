import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Topo from "@/components/Topo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topo />
      <Component {...pageProps} />
    </>
  );
}
