import { createSlice } from "@reduxjs/toolkit";

   const CountereSlice = createSlice ({
        name:'counter',
        initialState:{
            count:0
        },
        reducers:{
            //actioon
            increment:(state,actionByComponent)=>{
                state.count++
            },

            decrement:(state,actionByComponent)=>{
                state.count--
            },

            reset:(state,actionByComponent)=>{
               return {...state,count:0}
            },
            incrementByAmount:(state,actionByComponent)=>{
                state.count+=actionByComponent.payload
            }
        }
    })

    export const{increment,decrement,reset,incrementByAmount}= CountereSlice.actions
    export default CountereSlice.reducer