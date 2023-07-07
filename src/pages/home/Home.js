import React from "react";
import styles from "./home.module.scss";
import Card from "../../components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	getInitialState,
	productSelector,
} from "../../redux/reducers/productReducer";

const Home = () => {
	const dispatch = useDispatch();
	const { isLoading, products } = useSelector(productSelector);

	useEffect(() => {
		dispatch(getInitialState());
	}, []);

	const Loading = () => {
		return (
			<div className={styles.loading}>
				<h3>Loading...</h3>
			</div>
		);
	};

	return (
		<div className={styles.homeContainer}>
			{isLoading ? (
				<Loading />
			) : (
				<div className={styles.productList}>
					{products.map((item, i) => (
						<Card key={i} product={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
