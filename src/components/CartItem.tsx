import { useCartContext } from '../context/CartContext'
import productItems from '../data/products.json'
import { formatCurrency } from '../utilites/formatCurrency'
import { RxCross2 } from 'react-icons/rx'
type CartItemProps = {
    qty: number
    id: number
}

const CartItem = ({ qty, id }: CartItemProps) => {
    const { removeItem } = useCartContext()
    const item = productItems.find(item => item.id === id)
    const totalItem = qty * item!.price

    const img:string=new URL(`../images/${id}.jpg`,import.meta.url).href


    return (
        <div className='flex flex-col px-4 '>
            <div className='flex justify-between items-center '>
                <div className='flex mb-4 items-center gap-2 h-full my-auto'>
                    <img src={img} className="max-h-[110px] max-w-[110px] object-cover " alt={item?.name} />
                    <div>
                        <div className='flex'>
                            <p>  {item?.name}</p>
                            <div className='flex items-center justify-center'>
                                <RxCross2 size={10} className='ml-1 font-thin' />
                                <span className='text-xs font-thin'>{qty}</span>
                            </div>
                        </div>
                        <p className='font-thin text-sm'>{formatCurrency(item!.price)}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'>{formatCurrency(totalItem)}</p>
                    <button onClick={()=>removeItem(id)}>
                        <RxCross2 size={10} className='ml-1 font-thin flex justify-center items-center mx-auto h-6 w-6 border border-slate-400 hover:bg-rose-500 duration-300 hover:duration-300' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartItem