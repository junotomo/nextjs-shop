import { useRouter } from "next/router"
import { ImageContainer, ProducDetails, ProductContainer } from "../styles/pages/produc"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart"
import { useContext, useEffect } from "react"
import { CartContext } from "@/Contexts/CartContext"

interface ProductProps {
    product: {
      id: string,
      name: string,
      imageUrl: string,
      price: number,
      description: string,
      defaultPriceId: string,
    }
  }

export default function Product({product}: ProductProps) {
    const { isFallback} = useRouter()

    const {setId} = useContext(CartContext)
    const { addItem } = useShoppingCart();

    useEffect(()=> {
        setId(product.defaultPriceId)
    }),[]
  
    if (isFallback) {
        return <p>Loading...</p>
    }
    return(
        <>
         <Head>
          <title> {product.name}|john Doe shop</title>
        </Head>
        <ProductContainer>
            <ImageContainer>
                <img src={product.imageUrl}  width={520} height={480} alt="" />
            </ImageContainer>
            <ProducDetails>
                <h1>{product.name}</h1>
                <span>
                {Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency:'BRL'
                    }).format(product.price / 100)}    
                </span>
                <p>{product.description}</p>

                <button onClick={() => {addItem(product)}}>
                    Colocar no carrinho
                </button>
            </ProducDetails>
        </ProductContainer>
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {id: 'prod_PdqohJPtXrFsKH'}
            },
          
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    const productId = params!.id
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })
    const price = product.default_price as Stripe.Price
        
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount!,
                description: product.description,
                defaultPriceId: price.id,
              }
        },
        revalidate: 60 * 60 * 1,
    }
}