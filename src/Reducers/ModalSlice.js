import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice= createSlice({

    // name
    name: 'modal',


    // Initial State
    initialState:{
        mSlice: false
    },



    // Reducer method
    reducers:{
        ShowModal:(state, action)=>{
            state.mSlice= action.payload;
        },
    }


})
export const{ShowModal}= ModalSlice.actions
export default ModalSlice.reducer