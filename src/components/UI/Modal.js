import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import styles from "./Modal.module.css";

// TODO: Create a cart in context

const Modal = (props) => {
	const [cart, setCart] = useState([]);
	return createPortal(
		<div className={styles.modal}>
			{cart.length === 0 ? (
				<p className={styles.modalEmptyCart}>
					Your cart is empty, maybe consider renting a book?
				</p>
			) : (
				<div className={styles.modalInfo}></div>
			)}
			<div className={styles.modalButtons}>
				<Button onClick={props.onButtonClicked}>Close</Button>
			</div>
		</div>,
		document.querySelector("#modal"),
	);
};

export default Modal;
