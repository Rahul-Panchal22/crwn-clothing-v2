import "./cart-item.styles.scss";

const CartItem = (props) => {
  const { name, quantity, imageUrl, price } = props.cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-detail">
        <h2 className="item-name">{name}</h2>
        <span className="item-quantity">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
