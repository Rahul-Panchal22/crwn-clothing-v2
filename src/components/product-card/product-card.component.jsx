import './product-card.styles.scss'
import Button from '../button/button.component'
const ProductCard = ({name, imageUrl, price}) => {
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt='product'/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted">ADD TO CART</Button>
        </div>
    )
}

export default ProductCard