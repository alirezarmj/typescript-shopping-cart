import { useCartContext } from "../context/CartContext";
import { formatCurrency } from "../utilites/formatCurrency"

interface productProps {
    id: number,
    name: string,
    price: number
}

const Product = ({ id, name, price }: productProps) => {
    const{getItemQty,addItem,removeItem,decreaseItem}=useCartContext()

    const img:string=new URL(`../images/${id}.jpg`,import.meta.url).href

    let qty = getItemQty(id);
    return (
        // Card
        <div className="mx-auto w-full  flex flex-col bg-white pb-2 rounded-xl">
            <img src={img} className="object-cover w-full h-[250px] md:max-h-[350px] rounded-t-xl" alt={name} />
            <div className="flex justify-between items-center px-4 py-2">
                <h2 className="font-bold text-xl">{name}</h2>
                <span className="tex-sm">{formatCurrency(price)}</span>
            </div>
            {qty === 0 ? (<div className="w-full p-2">
                <button className="px-4 py-2 w-full bg-blue-800 text-white rounded-xl" onClick={()=>addItem(id)}>+Add to Cart</button>
            </div>) : (<div>
                <div className="flex items-center justify-center px-8 gap-4 mb-2">
                    <button className="px-4 py-2 bg-blue-800 text-white rounded-xl" onClick={()=>decreaseItem(id)}>-</button>
                    <span>{qty}</span>
                    <button className="px-4 py-2 bg-blue-800 text-white rounded-xl" onClick={()=>addItem(id)}>+</button>
                </div>
                <div className="px-6 flex justify-center mb-2">
                    <button className="px-4 py-2 bg-rose-700 text-white rounded-xl" onClick={()=>removeItem(id)}>remove</button>
                </div>
            </div>)}
        </div>
    )
}

export default Product