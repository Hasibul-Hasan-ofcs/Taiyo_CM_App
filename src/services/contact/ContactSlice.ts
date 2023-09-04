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
  },
});

export const { showContacts, addContact } = contactSlice.actions;
export default contactSlice.reducer;
