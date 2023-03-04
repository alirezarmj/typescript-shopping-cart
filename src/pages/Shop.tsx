import Product from '../components/Product'
import productItems from '../data/products.json'

const Shop = () => {

    return (
        <div className='max-w-[1240px] mx-auto px-4  '>
            <h1 className='font-bold text-4xl text-white mb-4'>Shop</h1>
            <div className='grid  lg:grid-cols-4 md:grid-cols-3 gap-4'>
                {productItems.map(item => (
                   <Product key={item.id} {...item}/>
                ))}
            </div>



        </div>
    )
}

export default Shop