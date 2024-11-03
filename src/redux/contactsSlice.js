import { createSlice} from '@reduxjs/toolkit';
 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
   reducers: {
      fetchContactsSussess: (state, action) => {
       state.items = action.payload;
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
export const { deleteContacts } = contactsSlice.actions;
export const { addContacts } = contactsSlice.actions;
export const { fetchContactsSussess } = contactsSlice.actions;
