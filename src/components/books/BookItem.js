import styles from "./BookItem.module.css";
import BookForm from "./BookForm";

const BookItem = (props) => {
	return (
		<li className={styles.bookItem}>
			<div className={styles.bookInfo}>
				<p className={styles.bookTitle}>{props.book.title}</p>
				<p className={styles.bookAuthor}>{props.book.author}</p>
				<p className={styles.bookPrice}>${props.book.price} / week</p>
			</div>
			<BookForm book={props.book} />
		</li>
	);
};

export default BookItem;
