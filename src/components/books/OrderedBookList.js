import { useContext } from "react";
import styles from "./OrderedBookList.module.css";
import { CartContext } from "../../store/CartContext";
import OrderedBookItem from "./OrderedBookItem";

const OrderedBookList = () => {
	const ctx = useContext(CartContext);
	return (
		<ul className={styles.bookList}>
			{ctx.orderedBooks.map((book) => (
				<OrderedBookItem book={book} />
			))}
		</ul>
	);
};

export default OrderedBookList;
