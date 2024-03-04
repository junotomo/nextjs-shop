import { Handbag, X } from "phosphor-react";
import { HeaderContainer, CartButton, CartContainer, CartHeader, CartItem, CartItemList, CartFooter } from "../pages/styles/pages/header";
import logo from "../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "@/Contexts/CartContext";
export default function Header() {
    const {
        cartCount,
        cartDetails,
        totalPrice,
        handleCartClick,
        removeItem,
        shouldDisplayCart
    } = useShoppingCart()

    const [isCreateingCheckoutSesson, setIsCreateingCheckoutSesson] = useState(false)
    const { id} = useContext(CartContext)
    async function handleBuyProduct() {
        try {
            setIsCreateingCheckoutSesson(true)
            const response = await axios.post('/api/checkout',{
                priceId: id,
            })
  
            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl
        } catch (error) {
            setIsCreateingCheckoutSesson(false)
            alert('falha ao redirecionar ao checkout')
        }
    }

    return(
            <HeaderContainer data-show={shouldDisplayCart}>
                <Image src={logo} width={52} height={52} alt="" />
                <CartButton onClick={handleCartClick}>
                    <span>{cartCount}</span>
                    <Handbag size={24} />
                </CartButton>
                {shouldDisplayCart &&(
                <CartContainer>
                    <div>
                    <CartHeader>
                        <button onClick={handleCartClick}>
                            <X size={24}/>
                        </button>
                        <h1>Sacola de Compras</h1>
                    </CartHeader>
                    <CartItemList>
                        {Object.values(cartDetails ?? {}).map(product => {
                            return(
                                <CartItem key={product.id}>
                                    <Image src={product.imageUrl} width={101} height={92} alt=""/>
                                    <div>
                                        <span>{product.name}</span>
                                        <h1>{Intl.NumberFormat('pt-BR',{
                                            style: 'currency',
                                            currency:'BRL'
                                            }).format(product.price / 100)}
                                        </h1>
                                        <button
                                            onClick={() => removeItem(product.id)}
                                            type="button"
                                        >remover</button>
                                    </div>

                                </CartItem>        
                            )
                        })}
                    </CartItemList>
                    </div>
                    <CartFooter>
                        <div>
                            <span>Quantidade</span>
                            <span>{cartCount}</span>
                        </div>
                        <div>
                            <span>Valor Total</span>
                            <span>{Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency:'BRL'
                            }).format(totalPrice! / 100)}</span>
                        </div>
                        <button onClick={()=> handleBuyProduct()}>
                            Finalizar Compra
                        </button>
                    </CartFooter>
                        
                    </CartContainer>
                )}
           

        </HeaderContainer>
    )
}


