import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './product-card.styles.scss'
import Button from '../button/button.component'
const ProductCard = (props) => {
    const {name, price, imageUrl} = props.product
    const {addItemToCart} = useContext(CartContext)

    const handleClick = () => {
        addItemToCart(props.product)
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt='product'/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted" onClick={handleClick}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard