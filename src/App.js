import "./App.css";
import Header from "./components/UI/Header";
import BookList from "./components/Books/BookList";
import { CartContextProvider } from "./store/CartContext";

const App = () => {
	return (
		<CartContextProvider>
			<Header />
			<BookList />
		</CartContextProvider>
	);
};

export default App;
