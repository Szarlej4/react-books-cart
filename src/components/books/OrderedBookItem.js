import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import styles from "./OrderedBookItem.module.css";
import Button from "../UI/Button";

const OrderedBookItem = (props) => {
	const ctx = useContext(CartContext);
	const orderedBook = ctx.orderedBooks.find(
		(book) => props.book.bookId === book.bookId,
	);

	const { title, author, price } = ctx.availableBooks.find(
		(book) => props.book.bookId === book.id,
	);

	const increasedRentalHandler = () => {
		if (orderedBook.rentalTime < 52) {
			ctx.onChangedBookRentalTime(
				props.book.bookId,
				orderedBook.rentalTime + 1,
			);
		}
	};

	const decreasedRentalHandler = () => {
		if (orderedBook.rentalTime - 1 > 0) {
			ctx.onChangedBookRentalTime(
				props.book.bookId,
				orderedBook.rentalTime - 1,
			);
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
						x {orderedBook.rentalTime}
					</span>
					week{orderedBook.rentalTime > 1 ? "s" : ""}
				</p>
			</div>
			<div className={styles.changeRentalButtons}>
				<Button
					className={styles.changeRentalButton}
					onClick={increasedRentalHandler}>
					+
				</Button>
				<Button
					className={styles.changeRentalButton}
					onClick={decreasedRentalHandler}>
					-
				</Button>
			</div>
		</li>
	);
};

export default OrderedBookItem;
