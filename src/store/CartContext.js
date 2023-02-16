import { createContext, useState, useEffect } from "react";
import Book from "../classes/Book/Book";

export const CartContext = createContext({
	availableBooks: [],
	orderedBooks: [],
	onAddedBook: (book) => {},
	onRemovedBook: (book) => {},
	onChangedBookRentalTime: (book, amount) => {},
	totalAmount: 0,
});

const calcTotalAmount = (availableBooks, orderedBooks) => {
	return (
		Math.round(
			orderedBooks.reduce((acc, orderedBook) => {
				return (
					acc +
					availableBooks.find(
						(book) => book.id === orderedBook.bookId,
					).price *
						orderedBook.rentalTime
				);
			}, 0) * 100,
		) / 100
	);
};

const availableBooks = [
	new Book(0, "1984", "George Orwell", 1.69),
	new Book(1, "The Lord of the Rings", "J.R.R Tolkien", 2.99),
	new Book(2, "The Kite Runner", "Khaled Hosseini", 2.39),
	new Book(3, "Slaughterhouse-Five", "Kurt Vonnegut", 2.19),
	new Book(4, "The Lion, the Witch, and the Wardrobe", "C.S. Lewis", 1.79),
];

export const CartContextProvider = (props) => {
	const [orderedBooks, setOrderedBooks] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(calcTotalAmount(availableBooks, orderedBooks));
	}, [orderedBooks]);

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
		console.log(
			orderedBooks.filter((orderedBook) => orderedBook.bookId !== bookId),
		);
	};

	const changedBookRentalTimeHandler = (bookId, amount) => {
		setOrderedBooks((orderedBooks) => {
			orderedBooks.find(
				(orderedBook) => orderedBook.bookId === bookId,
			).rentalTime = amount;
			setTotalAmount(calcTotalAmount(availableBooks, orderedBooks));
			return orderedBooks;
		});
	};

	return (
		<CartContext.Provider
			value={{
				availableBooks: availableBooks,
				orderedBooks: orderedBooks,
				onAddedBook: addedBookHandler,
				onRemovedBook: removedBookHandler,
				onChangedBookRentalTime: changedBookRentalTimeHandler,
				totalAmount: totalAmount,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};
