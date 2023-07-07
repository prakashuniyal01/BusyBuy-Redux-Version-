import React, { useState } from "react";
import styles from "./card.module.scss";
import { useDispatch } from "react-redux";
import {
	increseItem,
	decreaseItem,
	removeItem,
	addItem,
} from "../../redux/reducers/cartReducer";

const Card = (props) => {
	const { image, price, title, id, quantity = 0 } = props.product;
	const [isAdding, setIsAdding] = useState(false);
	const dispatch = useDispatch();

	const handleAdd = (product) => {
		console.log(product);
		setIsAdding(true);
		dispatch(addItem(product));
		setTimeout(() => {
			setIsAdding(false);
		}, 1000);
	};

	const handleIncrease = (product) => {
		dispatch(increseItem(product));
	};

	const handleDecrease = (product) => {
		dispatch(decreaseItem(product));
	};

	const handleRemove = (product) => {
		dispatch(removeItem(product));
	};

	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardImage}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.text}>
				<p className={styles.title}>{title.substring(0, 60)}...</p>
				<div className={styles.priceContainer}>
					<p className={styles.price}>$ {price}</p>
					{quantity > 0 && (
						<div className={styles.quantityContainer}>
							<button onClick={() => handleDecrease(props.product)}>-</button>
							<p className={styles.quantity}>{quantity}</p>
							<button onClick={() => handleIncrease(props.product)}>+</button>
						</div>
					)}
				</div>
			</div>
			{quantity > 0 ? (
				<button onClick={() => handleRemove(props.product)}>
					Remove From Cart
				</button>
			) : (
				<button onClick={() => handleAdd(props.product)}>
					{isAdding ? "Adding" : "Add to Cart"}
				</button>
			)}
		</div>
	);
};

export default Card;
