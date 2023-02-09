import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import styles from "./OrderedBookItem.module.css";

const OrderedBookItem = (props) => {
	const ctx = useContext(CartContext);
	const { title, author, price } = ctx.availableBooks.find(
		(book) => props.book.bookId === book.id,
	);
	return (
		<li className={styles.bookItem}>
			{title} {author} {price}
		</li>
	);
};

export default OrderedBookItem;
