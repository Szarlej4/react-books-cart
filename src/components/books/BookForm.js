import { useRef, useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { ToastContext } from "../../store/ToastContext";
import Button from "../UI/Button";
import styles from "./BookForm.module.css";

const BookForm = (props) => {
	const cartCtx = useContext(CartContext);
	const toastCtx = useContext(ToastContext);
	const amountRef = useRef(0);

	const addBookToCart = (e) => {
		e.preventDefault();
		const amount = +amountRef.current.value;
		if (amount > 0 && amount < 53 && Math.floor(amount) === amount) {
			let msg = "Book has been successfully added to the cart";
			if (
				cartCtx.orderedBooks.findIndex(
					(book) => book.bookId === props.book.id,
				) === -1
			) {
				cartCtx.onAddedBook(props.book.id, amount);
			} else {
				msg = `Book rental has been extended by ${amount} week${
					amount > 1 ? "s" : ""
				}`;
				const rentalLength = cartCtx.orderedBooks.find(
					(book) => book.bookId === props.book.id,
				).rentalTime;
				cartCtx.onChangedBookRentalTime(
					props.book.id,
					rentalLength + amount,
				);
			}
			toastCtx.onChangedMessage(msg);
		} else {
			let msg = "Invalid amount (only natural numbers)";
			if (Math.floor(amount) !== amount) {
				msg = "Invalid amount (only natural numbers)";
			} else if (amount < 1) {
				msg = "Invalid amount (min. 1 week)";
			} else {
				msg = "Invalid amount (max. 52 weeks)";
			}
			toastCtx.onChangedMessage(msg);
		}
	};

	return (
		<>
			<form className={styles.bookForm}>
				<label className={styles.amountLabel} htmlFor="weeksAmount">
					Weeks:
				</label>
				<input
					defaultValue="1"
					min={1}
					step={1}
					type="number"
					id="weeksAmount"
					ref={amountRef}
					className={styles.weekAmountInput}
				/>
				<Button
					onClick={addBookToCart}
					className={styles.formButton}
					type="submit">
					+ Add
				</Button>
			</form>
		</>
	);
};

export default BookForm;
