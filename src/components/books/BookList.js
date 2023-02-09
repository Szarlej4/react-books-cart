import { useContext } from "react";
import BookItem from "./BookItem";
import styles from "./BookList.module.css";
import { CartContext } from "../../store/CartContext";

const BookList = () => {
	const ctx = useContext(CartContext);
	return (
		<section className={styles.bookList__section}>
			<ul className={styles.bookList}>
				{ctx.availableBooks.map((book) => (
					<BookItem key={book.id} book={book} />
				))}
			</ul>
		</section>
	);
};

export default BookList;
