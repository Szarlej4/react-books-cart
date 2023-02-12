import { useContext } from "react";
import { createPortal } from "react-dom";
import Button from "../UI/Button";
import OrderedBookList from "../Books/OrderedBookList";
import styles from "./CartModal.module.css";
import { CartContext } from "../../store/CartContext";

const Modal = (props) => {
	const ctx = useContext(CartContext);
	const totalAmount =
		Math.round(
			ctx.orderedBooks.reduce((acc, orderedBook) => {
				return (
					acc +
					ctx.availableBooks.find(
						(book) => book.id === orderedBook.bookId,
					).price *
						orderedBook.rentalTime
				);
			}, 0) * 100,
		) / 100;
	const orderClickHandler = () => {
		console.log("Ordering...");
		// ctx.orderedBooks.forEach((book) => ctx.onRemovedBook(book.bookId));
	};
	return createPortal(
		<div className={styles.modal}>
			{ctx.orderedBooks.length === 0 ? (
				<p className={styles.modalEmptyCart}>
					Your cart is empty, maybe consider renting a book?
				</p>
			) : (
				<>
					<OrderedBookList />
					<p className={styles.totalAmount}>
						Total Amount: ${totalAmount}
					</p>
				</>
			)}
			<div className={styles.modalButtons}>
				{ctx.orderedBooks.length !== 0 && (
					<Button
						className={styles.orderButton}
						onClick={orderClickHandler}>
						Order
					</Button>
				)}
				<Button onClick={props.onCloseButtonClicked}>Close</Button>
			</div>
		</div>,
		document.querySelector("#modal"),
	);
};

export default Modal;
