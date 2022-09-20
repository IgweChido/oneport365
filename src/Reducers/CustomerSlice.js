import { createSlice } from "@reduxjs/toolkit";

export const CustomerSlice= createSlice({

    // name
    name: 'customer',


    // Initial State
    initialState:{
        cust:[],
        dest:[],
        id_cust:[],
    },



    // Reducer method
    reducers:{
        AddCurrentCust:(state, action)=>{
            state.cust = action.payload;
            console.log(action.payload)
        },
        AddCurrentDest:(state, action)=>{
            state.dest = action.payload;
            console.log(action.payload)
        },
        AddIdCust:(state, action)=>{
            state.id_cust = action.payload;
            console.log(action.payload)
        },
    }


})
export const{AddCurrentCust,  AddCurrentDest, AddIdCust}= CustomerSlice.actions
export default CustomerSlice.reducer