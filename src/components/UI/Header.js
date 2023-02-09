import { useState } from "react";
import styles from "./Header.module.css";
import library from "../../assets/images/library-background.jpg";
import Cart from "../Cart/Cart";
import Overlay from "./Overlay";
import CartModal from "../Cart/CartModal";

const HeroText = () => {
	return (
		<div className={styles.desc}>
			<p className={styles.desc__title}>Best books, always available</p>
			<p className={styles.desc__desc}>
				Choose your favorite book from our broad selection of available
				books and enjoy a great time reading in our place or at home.
			</p>
			<p className={styles.desc__desc}>
				All of our books are chosen by book charts of best selling
				books, each year, annualy, we are always open for you.
			</p>
		</div>
	);
};

const Header = () => {
	const [isCartHidden, setIsCartHidden] = useState(true);

	const switchCartVisibility = () => {
		isCartHidden ? setIsCartHidden(false) : setIsCartHidden(true);
	};

	return (
		<>
			{!isCartHidden ? (
				<Overlay onOverlayClicked={switchCartVisibility} />
			) : null}
			{!isCartHidden ? (
				<CartModal onButtonClicked={switchCartVisibility} />
			) : null}
			<header>
				<section className={styles.nav}>
					<div className={styles.nav__wrapper}>
						<a href="/" className={styles.nav__logo}>
							Book Rental
						</a>
						<Cart onCartClicked={switchCartVisibility} />
					</div>
				</section>
				<div className={styles.imgWrapper}>
					<img
						src={library}
						alt="library"
						className={styles.backgroundImg}
					/>
				</div>
				<HeroText />
			</header>
		</>
	);
};

export default Header;
