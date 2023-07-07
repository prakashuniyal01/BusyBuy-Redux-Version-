import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

export const getCartState = createAsyncThunk("cart/getCartState", () => {});

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addItem: (state, action) => {
			state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
		},

		increseItem: (state, action) => {
			state.cart = [
				...state.cart.map((item) => {
					if (action.payload.id === item.id) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				}),
			];
		},

		decreaseItem: (state, action) => {
			const product = action.payload;
			const prev = state.cart;
			if (product.quantity === 1) {
				state.cart = prev.filter((item) => {
					return product.id !== item.id;
				});
			} else {
				state.cart = prev.map((item) => {
					if (product.id === item.id) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				});
			}
		},

		removeItem: (state, action) => {
			const prev = state.cart;
			const product = action.payload;
			state.cart = prev.filter((item) => {
				return product.id !== item.id;
			});
		},
	},

	extraReducers: (builder) => {
		builder.addCase(increseItem, (state, action) => {
			state.isAdding = true;
		});
	},
});

export const cartReducer = cartSlice.reducer;

export const { increseItem, decreaseItem, addItem, removeItem } =
	cartSlice.actions;

export const cartSelector = (state) => state.cartReducer;
