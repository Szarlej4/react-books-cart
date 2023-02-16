import "./App.css";
import Header from "./components/UI/Header";
import BookList from "./components/Books/BookList";
import { CartContextProvider } from "./store/CartContext";
import { ToastContextProvider } from "./store/ToastContext";

const App = () => {
	return (
		<CartContextProvider>
			<Header />
			<ToastContextProvider>
				<BookList />
			</ToastContextProvider>
		</CartContextProvider>
	);
};

export default App;
