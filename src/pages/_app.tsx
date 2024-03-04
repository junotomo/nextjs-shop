
import type { AppProps } from "next/app";
import { globaStyles } from "./styles/global";
import {  Container } from "./styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import Header from "@/components/Header";
import { CartContextProvider } from "@/Contexts/CartContext";
globaStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>

      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={String(process.env.STRIPE_PUBLIC_KEY)}
        currency="BRL"
      >
      <CartContextProvider>
        <Header/>
        <Component {...pageProps} />
      </CartContextProvider>
      </CartProvider>
    </Container>
  );
}
