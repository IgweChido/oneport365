import {configureStore} from '@reduxjs/toolkit'
import ModalSlice from './ModalSlice'




const Store = configureStore({

    reducer:{
      
       
        modal: ModalSlice,
    }
})

export default Store