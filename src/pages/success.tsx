import Link from "next/link";
import { SuccessContainer, ImageContainer } from "./styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
    customerName: string,
    product:{ 
        name:string,
        imageUrl: string
    },
   
}

export default function Success({customerName, product}: SuccessProps) {
    const { cartDetails, cartCount } = useShoppingCart();

    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>
            <ImageContainer>
            {Object.values(cartDetails ?? {}).map(product => {
                return(
                   
                        <Image src={product.imageUrl} width={120} height={110} alt="" />
                   
                )
            })}
             </ImageContainer>   
           
            <p>
                Parabens! 
                <strong>{customerName}</strong> 
                {cartCount! > 1 ? (
                    <span>
                     as  suas <strong>{cartCount}</strong> camisetas
                    estão a caminho! 
                    </span>
                     
                ):(
                    <>
                    sua  <strong>{product.name}</strong>
                    esta a caminho! 
                    </>
                )}
                 
                   
            </p>
            <Link href={'/'}>
                voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
            
        }
    }
    
    const  sessionId  = String(query.session_id)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items','line_items.data.price.product'],
    })

    const customerName = session.customer_details?.name
        const product = session.line_items?.data[0].price?.product as Stripe.Product
    return {
        props:{
            customerName,
            product: { 
                name: product.name,
                imageUrl: product.images[0],
            }
           
        }
    }
}