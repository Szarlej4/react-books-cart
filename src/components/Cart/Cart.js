import { useContext } from "react";
import styles from "./Cart.module.css";
import CartIcon from "../../assets/images/icons/CartIcon";
import { CartContext } from "../../store/CartContext";

const Cart = (props) => {
	const ctx = useContext(CartContext);
	return (
		<div onClick={props.onCartClicked} className={styles.cart}>
			<CartIcon />
			<p className={styles.cart__text}>Your Cart</p>
			<p className={styles.cart__amount}>{ctx.orderedBooks.length}</p>
		</div>
	);
};

export default Cart;
