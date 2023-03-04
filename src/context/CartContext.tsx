import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
type CartProviderProps = { children: ReactNode }


type CartItem = {
    id: number
    qty: number
}
type CartContext = {
    getItemQty: (id: number) => number
    addItem: (id: number) => void
    decreaseItem: (id: number) => void
    removeItem: (id: number) => void
    openCart:()=>void
    closeCart:()=>void
    cartItems:CartItem[]
    cartQty:number
    isOpen:boolean
}

const CartContext = createContext({} as CartContext)


export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
    
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const[isOpen,setIsOpen]=useState(false)
    // Functions
    const cartQty=cartItems.reduce((qty,item)=>qty+item.qty,0) 
    const openCart=()=> setIsOpen(true)
    const closeCart=()=> setIsOpen(false)

    function getItemQty(id: number) {
        return cartItems.find(item => item.id === id)?.qty || 0
    }

    function addItem(id: number) {
        setCartItems((currItems) => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, qty: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty + 1 }
                    } else { return item }
                })
            }
        })
    }

    function decreaseItem(id: number) {
        setCartItems((currItems) => {
            if (currItems.find(item => item.id === id)?.qty == 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 }
                    } else { return item }
                })
            }
        })
    }
    function removeItem(id: number) {
        setCartItems((currItems) => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return <CartContext.Provider value={{ getItemQty, addItem,decreaseItem ,closeCart,removeItem,openCart,cartItems,cartQty,isOpen}}>
        {children}
    </CartContext.Provider>

}