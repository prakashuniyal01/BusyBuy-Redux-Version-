import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

export const store = configureStore({
	reducer: {
		productReducer,
		cartReducer,
	},
});
