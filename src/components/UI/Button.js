import styles from "./Button.module.css";

const Button = (props) => {
	const classes = `${styles.button} ${props.className || ""}`;
	return (
		<button
			type={props.type || "button"}
			onClick={props.onClick}
			className={classes}>
			{props.children}
		</button>
	);
};

export default Button;
