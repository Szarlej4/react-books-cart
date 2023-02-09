import { createContext, useState } from "react";
import Book from "../classes/Book";

export const CartContext = createContext({
	availableBooks: [],
	orderedBooks: [],
	onAddedBook: (book) => {},
	onRemovedBook: (book) => {},
	onChangedBookRentalTime: (book, amount) => {},
});

export const CartContextProvider = (props) => {
	const [orderedBooks, setOrderedBooks] = useState([]);

	const addedBookHandler = (bookId) => {
		setOrderedBooks((orderedBooks) => [
			{
				bookId: bookId,
				rentalTime: 1,
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
					new Book("1984", "George Orwell", 1.69),
					new Book("The Lord of the Rings", "J.R.R Tolkien", 2.99),
					new Book("The Kite Runner", "Khaled Hosseini", 2.39),
					new Book("Slaughterhouse-Five", "Kurt Vonnegut", 2.19),
					new Book(
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
