import { configureStore } from "@reduxjs/toolkit";
import gateSlice from "./gates/gateSlice";

export const store = configureStore({
    reducer: {
        gateReducer: gateSlice
    }
})