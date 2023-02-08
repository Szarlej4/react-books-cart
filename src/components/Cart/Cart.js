import styles from "./Cart.module.css";
import CartIcon from "../../assets/images/icons/CartIcon";

const Cart = () => {
	return (
		<div className={styles.cart}>
			<CartIcon />
			<p className={styles.cart__text}>Your Cart</p>
			<p className={styles.cart__amount}>1</p>
		</div>
	);
};

export default Cart;
