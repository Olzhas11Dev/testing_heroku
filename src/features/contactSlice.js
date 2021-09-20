import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contactList: []
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        getToList:(state,action)=>{
            state.contactList = action.payload
        }
    }
});

export const {addToList,getToList} = contactSlice.actions
export default contactSlice.reducer