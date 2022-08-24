import { configureStore } from "@reduxjs/toolkit";
import getItem from "./action";

const store = configureStore({
    reducer:{
        getItem: getItem
    }
})

export default store
