import CheckOutItems from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  return (
    <div className="checkout-container">
      <CheckOutItems />
    </div>
  );
};

export default CheckOut;
