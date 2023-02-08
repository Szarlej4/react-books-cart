import styles from "./BookItem.module.css";

const BookItem = (props) => {
	return (
		<li className={styles.bookItem}>
			<p className={styles.bookTitle}>{props.book.title}</p>
			<p className={styles.bookAuthor}>{props.book.author}</p>
			<p className={styles.bookPrice}>${props.book.price} / week</p>
		</li>
	);
};

export default BookItem;
