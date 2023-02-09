import { useRef, useState } from "react";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import styles from "./BookForm.module.css";

const BookForm = (props) => {
	const amountRef = useRef(0);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [toastText, setToastText] = useState("");

	const addBookToCart = (e) => {
		e.preventDefault();
		const amount = +amountRef.current.value;
		if (amount > 0 && Math.floor(amount) === amount) {
			console.log(
				`${props.book.title} written by ${props.book.author} added to cart`,
			);
			console.log(
				`Rental Price: $${props.book.price}/week Total value: ${
					props.book.price * +amountRef.current.value
				}`,
			);
		} else {
			console.log("isToastVisible: " + isToastVisible);
			if (!isToastVisible && Math.floor(amount) !== amount) {
				setTimeout(() => {
					setIsToastVisible(false);
					setToastText("");
				}, 3000);
				setIsToastVisible(true);
				setToastText("Invalid amount (only natural numbers)");
			} else if (!isToastVisible && amount < 1) {
				setTimeout(() => {
					setIsToastVisible(false);
					setToastText("");
				}, 3000);
				setIsToastVisible(true);
				setToastText("Invalid amount (min. 1 week)");
			}
		}
	};

	return (
		<>
			<form action="" className={styles.bookForm}>
				<label className={styles.amountLabel} htmlFor="weeksAmount">
					Weeks:
				</label>
				<input
					defaultValue="1"
					min={0}
					step={1}
					type="number"
					id="weeksAmount"
					ref={amountRef}
					className={styles.weekAmountInput}
				/>
				<Button
					className={styles.formButton}
					type="submit"
					onClick={addBookToCart}>
					+ Add
				</Button>
			</form>
			{isToastVisible && <Toast>{toastText}</Toast>}
		</>
	);
};

export default BookForm;
