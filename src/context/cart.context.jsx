import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    console.log("cartItems", cartItems)
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // If we found the cart Item then increment the quatity
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
        {...cartItem, quantity : cartItem.quantity + 1} : cartItem )
    }
    
    // If there's new product to be found
    return [...cartItems, {...productToAdd, quantity : 1}]
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export default CartProvider