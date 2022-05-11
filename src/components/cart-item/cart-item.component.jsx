import './cart-item.styles.scss'

const CartItem = (props) => {
    const {name, quantity} = props.cartItem
    console.log("name", name)
    console.log("quantity", quantity)
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem