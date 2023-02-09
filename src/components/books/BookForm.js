import { useRef, useState, useContext } from "react";
import { CartContext } from "../../store/CartContext";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import styles from "./BookForm.module.css";

const BookForm = (props) => {
	const ctx = useContext(CartContext);
	const amountRef = useRef(0);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [toastText, setToastText] = useState("");

	const showToast = (text, length) => {
		setTimeout(() => {
			setIsToastVisible(false);
			setToastText("");
		}, length);
		setIsToastVisible(true);
		setToastText(text);
	};

	const addBookToCart = (e) => {
		e.preventDefault();
		console.log(ctx.orderedBooks);
		const amount = +amountRef.current.value;
		if (amount > 0 && Math.floor(amount) === amount) {
			let msg = "Book has been successfully added to the cart";
			if (
				ctx.orderedBooks.findIndex(
					(book) => book.bookId === props.book.id,
				) === -1
			) {
				ctx.onAddedBook(props.book.id, amount);
			} else {
				msg = `Book rental has been extended by ${amount} week${
					amount > 1 ? "s" : ""
				}`;
				const rentalLength = ctx.orderedBooks.find(
					(book) => book.bookId === props.book.id,
				).rentalTime;
				ctx.onChangedBookRentalTime(
					props.book.id,
					rentalLength + amount,
				);
			}
			if (!isToastVisible) showToast(msg, 3000);
		} else {
			if (!isToastVisible && Math.floor(amount) !== amount) {
				const msg = "Invalid amount (only natural numbers)";
				showToast(msg, 3000);
			} else if (!isToastVisible && amount < 1) {
				const msg = "Invalid amount (min. 1 week)";
				showToast(msg, 3000);
			}
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
			{isToastVisible && <Toast>{toastText}</Toast>}
		</>
	);
};

export default BookForm;
