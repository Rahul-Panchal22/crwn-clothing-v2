import { useContext } from 'react'
import {ProductsContext} from '../../context/products.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop-component.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    console.log("Products -----", products)
    return (
        <div className='product-container'>
            {
                products.map(({id, name, imageUrl, price}) => (
                    <ProductCard key={id} name={name} imageUrl={imageUrl} price={price}/>
                ))
            }
        </div>
    )
}

export default Shop