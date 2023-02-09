import { createContext, useState } from "react";
import Book from "../classes/Book/Book";

export const CartContext = createContext({
	availableBooks: [],
	orderedBooks: [],
	onAddedBook: (book) => {},
	onRemovedBook: (book) => {},
	onChangedBookRentalTime: (book, amount) => {},
});

export const CartContextProvider = (props) => {
	const [orderedBooks, setOrderedBooks] = useState([]);

	const addedBookHandler = (bookId, amount) => {
		setOrderedBooks((orderedBooks) => [
			{
				bookId: bookId,
				rentalTime: amount,
			},
			...orderedBooks,
		]);
	};

	const removedBookHandler = (bookId) => {
		setOrderedBooks((orderedBooks) =>
			orderedBooks.filter((orderedBook) => orderedBook.bookId !== bookId),
		);
	};

	const changedBookRentalTimeHandler = (bookId, amount) => {
		setOrderedBooks((orderedBooks) => {
			orderedBooks.find(
				(orderedBook) => orderedBook.bookId === bookId,
			).rentalTime = amount;
			return orderedBooks;
		});
	};

	return (
		<CartContext.Provider
			value={{
				availableBooks: [
					new Book(0, "1984", "George Orwell", 1.69),
					new Book(1, "The Lord of the Rings", "J.R.R Tolkien", 2.99),
					new Book(2, "The Kite Runner", "Khaled Hosseini", 2.39),
					new Book(3, "Slaughterhouse-Five", "Kurt Vonnegut", 2.19),
					new Book(
						4,
						"The Lion, the Witch, and the Wardrobe",
						"C.S. Lewis",
						1.79,
					),
				],
				orderedBooks: orderedBooks,
				onAddedBook: addedBookHandler,
				onRemovedBook: removedBookHandler,
				onChangedBookRentalTime: changedBookRentalTimeHandler,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
