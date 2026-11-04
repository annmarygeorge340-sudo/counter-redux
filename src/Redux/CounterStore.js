import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";




const counterStore = configureStore({

reducer:{

CounterReducer : CounterSlice

}

})


export default counterStore