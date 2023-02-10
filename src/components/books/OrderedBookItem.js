import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import styles from "./OrderedBookItem.module.css";

const OrderedBookItem = (props) => {
	const ctx = useContext(CartContext);
	const { title, author, price } = ctx.availableBooks.find(
		(book) => props.book.bookId === book.id,
	);
	const { rentalTime } = ctx.orderedBooks.find(
		(book) => props.book.bookId === book.bookId,
	);
	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{title}</p>
			<p className={styles.bookAuthor}>{author}</p>
			<p className={styles.bookPrice}>${price} / week</p>
			<span className={styles.rentalTime}>x{rentalTime}</span>
		</li>
	);
};

export default OrderedBookItem;