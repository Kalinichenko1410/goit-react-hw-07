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
    addContact: (state, action) => {
      state.items.push(action.payload);
     },
     
  },
});

export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;  
export const { deleteContact } = contactsSlice.actions;
export const { addContact } = contactsSlice.actions;
export const { fetchContactsSussess } = contactsSlice.actions;
