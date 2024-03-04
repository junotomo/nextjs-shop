import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeContainer, ProdductContainer } from "./styles/pages/home";
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    currency: string,
    price: number,
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { addItem } = useShoppingCart();
  
  return (
    <>
      <Head>
          <title>john Doe shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className="keen-slider">
        
        {products.map( product => {
          return(
            <Link key={product.id}  href={`/product/${product.id}`} prefetch={false}>
              <ProdductContainer className="keen-slider__slide">
                  <Image alt="" src={product.imageUrl} width={520} height={480}/>
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>
                        {Intl.NumberFormat('pt-BR',{
                          style: 'currency',
                          currency:'BRL'
                        }).format(product.price / 100)}
                      </span>
                    </div>
                    <button>
                      <Handbag size={24} onClick={()=> {addItem(product)}}/>
                    </button>
                  </footer>
              </ProdductContainer>
            </Link>
          )
        })}
      </HomeContainer>
      
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map( product => {
    const price = product.default_price as Stripe.Price
    

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      currency: 'BRL',
      price: price.unit_amount,

    }
  })
  return {
    props: {
       products
    },
    revalidate: 60 * 60 * 1,
  }
}