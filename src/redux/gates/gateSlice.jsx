import { createSlice } from "@reduxjs/toolkit";
export const gateSlice = createSlice({
    name: "gateReducer",
    initialState: {
        products: [
            {
                id: 1,
                name: "Big Mac",
                price: 2,
                count: 0,
                img: "https://neal.fun/spend/images/big-mac.jpg"
            },
            {
                id: 2,
                name: "Flip Flops",
                price: 3,
                count: 0,
                img: "https://neal.fun/spend/images/flip-flops.jpg"
            },
            {
                id: 3,
                name: "Coca-Cola Pack",
                price: 100000000005,
                count: 0,
                img: "https://neal.fun/spend/images/coca-cola-pack.jpg"
            },
        ],
        count: 100000000000,
    },
    reducers: {
        buyProduct: (state, action) => {
            const id = action.payload;
            const i = state.products.findIndex(item => item.id === id);
            state.products[i].count = state.products[i].count + 1;
            state.count = state.count - state.products[i].price;
        },
        sellProduct: (state, action) => {
            const id = action.payload;
            const i = state.products.findIndex(item => item.id === id);
            state.count = state.count + state.products[i].price
            if (state.products[i].count === 0) {
                state.products[i].count = 0;
            }
            else {
                state.products[i].count = state.products[i].count - 1;
            }
        },
        buyAmount: (state, action) => {
            const { query, id } = action.payload;
            const value = Number(query) + 1;
            console.log('Value - ',value)
            const index = state.products.findIndex((item) => item.id === id);
            state.products[index].count = value;
        }
    }
});

export const { buyProduct, sellProduct, buyAmount } = gateSlice.actions;
export default gateSlice.reducer;