import { createSlice} from '@reduxjs/toolkit';
 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
   reducers: {
      fetchContactsSussess: (state, action) => {
       state.items = action.payload;
       state.isLoading = false;
     },
     setIsLoading: (state, action) => {
       state.isLoading = action.payload;
     },
     setError : (state, action) => {
       state.error = action.payload
       state.isLoading = false;
     },
    deleteContacts: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
   addContacts: (state, action) => {
    state.items.push(action.payload); 
},
  },
});

export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;  

export const { fetchContactsSussess, deleteContacts, addContacts, setIsLoading, setError} = contactsSlice.actions;
