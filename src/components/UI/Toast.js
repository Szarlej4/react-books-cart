import styles from "./Toast.module.css";
import { createPortal } from "react-dom";

const Toast = (props) => {
	return createPortal(
		<div className={styles.toast}>{props.msg}</div>,
		document.querySelector("#toast"),
	);
};

export default Toast;
