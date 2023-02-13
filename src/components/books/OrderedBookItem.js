import { useContext, useState } from "react";
import { CartContext } from "../../store/CartContext";
import styles from "./OrderedBookItem.module.css";
import Button from "../UI/Button";

const OrderedBookItem = (props) => {
	const ctx = useContext(CartContext);
	const orderedBook = ctx.orderedBooks.find(
		(book) => props.book.bookId === book.bookId,
	);
	const [rentalTime, setRentalTime] = useState(orderedBook.rentalTime);

	const { title, author, price } = ctx.availableBooks.find(
		(book) => props.book.bookId === book.id,
	);

	const increasedRentalHandler = () => {
		console.log(ctx.orderedBooks);
		ctx.onChangedBookRentalTime(props.book.bookId, rentalTime + 1);
		setRentalTime((rentalTime) => rentalTime + 1);
	};

	const decreasedRentalHandler = () => {
		console.log(ctx.orderedBooks);
		if (rentalTime - 1 > 0) {
			ctx.onChangedBookRentalTime(props.book.bookId, rentalTime - 1);
			setRentalTime((rentalTime) => rentalTime - 1);
		} else {
			ctx.onRemovedBook(props.book.bookId);
		}
	};

	return (
		<li className={styles.bookItem}>
			<div className={styles.bookInfo}>
				<p className={styles.bookTitle}>{title}</p>
				<p className={styles.bookAuthor}>{author}</p>
				<p className={styles.bookPrice}>${price} / week</p>
				<p className={styles.rentalTime}>
					<span className={styles.rentalTimeBackground}>
						x {rentalTime}
					</span>
					week{rentalTime > 1 ? "s" : ""}
				</p>
			</div>
			<div className={styles.changeRentalButtons}>
				<Button onClick={increasedRentalHandler}>+</Button>
				<Button onClick={decreasedRentalHandler}>-</Button>
			</div>
		</li>
	);
};

export default OrderedBookItem;
