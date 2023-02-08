import BookItem from "./BookItem";
import styles from "./BookList.module.css";

const BookList = (props) => {
	return (
		<section className={styles.bookList__section}>
			<ul className={styles.bookList}>
				{props.books.map((book) => (
					<BookItem key={book.id} book={book} />
				))}
			</ul>
		</section>
	);
};

export default BookList;
