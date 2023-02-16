import { useState, useEffect, createContext } from "react";
import Toast from "../components/UI/Toast";

export const ToastContext = createContext({
	onChangedMessage: () => {},
});

export const ToastContextProvider = (props) => {
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	useEffect(() => {
		const id = setTimeout(() => {
			setToastMessage("");
			setIsToastVisible(false);
		}, 3000);
		setIsToastVisible(true);
		return () => {
			clearTimeout(id);
		};
	}, [toastMessage]);

	const changedMessageHandler = (message) => {
		setToastMessage(message);
	};

	return (
		<ToastContext.Provider
			value={{
				onChangedMessage: changedMessageHandler,
			}}>
			{
				<>
					{props.children}
					{toastMessage !== "" && isToastVisible && (
						<Toast msg={toastMessage} />
					)}
				</>
			}
		</ToastContext.Provider>
	);
};
