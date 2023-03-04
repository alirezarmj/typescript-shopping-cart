
import { useState } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { RxCross2 } from 'react-icons/rx'
import CartItem from './CartItem'
import { formatCurrency } from '../utilites/formatCurrency'
import productItems from '../data/products.json'
const Navbar = () => {
    const [nav, setNav] = useState(true)
    const { cartQty, cartItems } = useCartContext()


    return (
        <div className=' h-[64px] w-screen bg-black/80 text-white mb-4'>
            <div className="max-w-[1240px] h-full px-4 mx-auto flex justify-between items-center">
                <ul className='flex gap-4'>
                    <li ><NavLink end to={'/'} style={({ isActive }) => { return { color: isActive ? 'orange' : "" } }}>Home</NavLink></li>
                    <li><NavLink end to={'/shop'} style={({ isActive }) => { return { color: isActive ? 'orange' : "" } }}>shop</NavLink></li>
                    <li><NavLink end to={'/about'} style={({ isActive }) => { return { color: isActive ? 'orange' : "" } }}>About</NavLink></li>
                </ul>
                <div className='fixed top-2 right-10'>
                    <div className=' relative cursor-pointer' onClick={() => setNav(!nav)} >
                        <div className='rounded-full h-10 w-10 border border-white flex justify-center items-center p-1'>
                            <BsCartCheck size={25} />
                        </div>
                        <span className='text-xs rounded-full bg-rose-700 text-white h-4 w-4 absolute bottom-0 right-0 transform  translate-y-2 self-center justify-self-center text-center'>{cartQty}</span>
                    </div>
                </div>
                {/* Mobile Menu */}
                {/* OverLay */}
                <div className={!nav ? "bg-black/50 w-full h-screen z-10 fixed top-0 right-0 duration-300 ease-in " : ""}>
                    <div className={!nav ? "bg-white text-black h-full w-[30%]  flex flex-col fixed top-0 right-0 duration-300 ease-in" : "fixed top-0  right-[-100%]"}>
                        <div className="flex justify-between p-4 ">
                            <p className="font-bold text-xl">
                                Cart
                            </p>
                            <div >
                                <RxCross2 size={20} className="cursor-pointer" onClick={() => { setNav(!nav) }} />
                            </div>
                        </div>
                        {
                            cartItems.map(item => (
                                <CartItem key={item.id} {...item} />
                            ))
                        }
                        <div className='ml-auto flex font-bold gap-2 text-xl'>
                            <p>Total:</p>
                            {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = productItems.find(item => item.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.qty
                }, 0))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar