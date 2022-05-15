import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Fragment } from "react/cjs/react.production.min";

const CheckOutItems = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="checkout-item-details">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="products">
        {cartItems.map(({ name, quantity, price, imageUrl }) => (
          <Fragment>
            <div className="product-image">
              <img src={imageUrl} alt={`${name}`} />
            </div>
            <span>{name}</span>
            <span className="product-cal">
              <div>{`<`}</div>
              <span>{quantity}</span>
              <div>{`>`}</div>
            </span>
            <span>{price}</span>
            <div>X</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckOutItems;
