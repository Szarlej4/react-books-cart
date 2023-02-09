import { useContext } from "react";
import { createPortal } from "react-dom";
import Button from "../UI/Button";
import OrderedBookList from "../Books/OrderedBookList";
import styles from "./CartModal.module.css";
import { CartContext } from "../../store/CartContext";

const Modal = (props) => {
	const ctx = useContext(CartContext);
	return createPortal(
		<div className={styles.modal}>
			{ctx.orderedBooks.length === 0 ? (
				<p className={styles.modalEmptyCart}>
					Your cart is empty, maybe consider renting a book?
				</p>
			) : (
				<OrderedBookList />
			)}
			<div className={styles.modalButtons}>
				<Button onClick={props.onButtonClicked}>Close</Button>
			</div>
		</div>,
		document.querySelector("#modal"),
	);
};

export default Modal;
