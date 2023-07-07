import React from "react";
import styles from "./cart.module.scss";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/reducers/cartReducer";

const Cart = () => {
	const { cart } = useSelector(cartSelector);

	if (cart.length === 0) {
		return (
			<div className={styles.empty}>
				<h3>Cart is Empty!</h3>
			</div>
		);
	}

	return (
		<div className={styles.cartContainer}>
			<div className={styles.productList}>
				{cart.map((item, i) => (
					<Card key={i} product={item} />
				))}
			</div>
		</div>
	);
};

export default Cart;
