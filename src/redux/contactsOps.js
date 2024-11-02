import axios from "axios";
import { fetchContactsSussess } from "./contactsSlice";

axios.defaults.baseURL = "https://67266302302d03037e6d6520.mockapi.io/"

export const fetchContacts = () => async dispatch => {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSussess(data));
};
export const deleteContact = id => async dispatch => {
    const { data } = await axios.delete(`/contacts/${id}`);
    dispatch(fetchContactsSussess(data));
};



