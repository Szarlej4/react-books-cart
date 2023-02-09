import { createPortal } from "react-dom";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
	return createPortal(
		<div onClick={props.onOverlayClicked} className={styles.overlay}></div>,
		document.querySelector("#overlay"),
	);
};

export default Overlay;
