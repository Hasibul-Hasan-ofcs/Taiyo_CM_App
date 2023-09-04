import { createSlice } from "@reduxjs/toolkit";

const initialContacts = {
  contacts: [
    {
      id: 1,
      firstName: "Hasibul",
      lastName: "Rasel",
      status: "active",
    },
  ],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    showContacts: (state) => state,
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((el) => el.id !== id);
    },
    editContact: (state, action) => {
      const id = action.payload.id;
      const foundContact = state.contacts.filter((el) => el.id === id);
      if (foundContact) {
        foundContact[0].firstName = action.payload.firstName;
        foundContact[0].lastName = action.payload.lastName;
        foundContact[0].status = action.payload.status;
      }
    },
  },
});

export const { showContacts, addContact, deleteContact, editContact } =
  contactSlice.actions;
export default contactSlice.reducer;
