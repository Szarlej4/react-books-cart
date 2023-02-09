import { useRef } from "react";
import Button from "../UI/Button";
import styles from "./BookForm.module.css";

const BookForm = (props) => {
	const amountRef = useRef(0);

	const addBookToCart = (e) => {
		e.preventDefault();
		const amount = +amountRef.current.value;
		if (amount !== 0 && Math.floor(amount) === amount) {
			console.log(
				`${props.book.title} written by ${props.book.author} added to cart`,
			);
			console.log(
				`Rental Price: $${props.book.price}/week Total value: ${
					props.book.price * +amountRef.current.value
				}`,
			);
		} else {
			console.log("wrong amount");
		}
	};

	return (
		<form action="" className={styles.bookForm}>
			<label className={styles.amountLabel} htmlFor="weeksAmount">
				Weeks:
			</label>
			<input
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
	);
};

export default BookForm;
