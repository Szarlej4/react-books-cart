import "./App.css";
import Header from "./components/UI/Header";
import BookList from "./components/Books/BookList";
import Book from "./classes/Book";

const availableBooks = [
	new Book("1984", "George Orwell", 1.69),
	new Book("The Lord of the Rings", "J.R.R Tolkien", 2.99),
	new Book("The Kite Runner", "Khaled Hosseini", 2.39),
	new Book("Slaughterhouse-Five", "Kurt Vonnegut", 2.19),
	new Book("The Lion, the Witch, and the Wardrobe", "C.S. Lewis", 1.79),
];

const App = () => {
	return (
		<>
			<Header />
			<BookList books={availableBooks} />
		</>
	);
};

export default App;
