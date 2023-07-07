import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
	products: [],
	isLoading: false,
};

export const getInitialState = createAsyncThunk(
	"product/getInitialState",
	() => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(data);
			}, 3000);
		});
	}
);

const productSlice = createSlice({
	name: "product",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getInitialState.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getInitialState.fulfilled, (state, action) => {
				state.products = [...action.payload];
				state.isLoading = false;
			})
			.addCase(getInitialState.rejected, (state, action) => {
				state.products = [];
				state.isLoading = false;
			});
	},
});

export const productReducer = productSlice.reducer;

export const actions = productSlice.actions;

export const productSelector = (state) => state.productReducer;
