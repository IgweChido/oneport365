import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import ModalSlice from "./ModalSlice";

const Store = configureStore({
  reducer: {
    modal: ModalSlice,
    customer: CustomerSlice,
  },
});

export default Store;
