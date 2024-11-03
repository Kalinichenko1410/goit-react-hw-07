import axios from "axios";
import { addContacts, deleteContacts, fetchContactsSussess } from "./contactsSlice";

axios.defaults.baseURL = "https://67266302302d03037e6d6520.mockapi.io/"

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(setIsLoading(true));

        const { data } = await axios.get("/contacts");
        dispatch(fetchContactsSussess(data));
    } catch (error) {
        dispatch(setError(true))
    };
    export const AddContact = body => async dispatch => {
        const { data } = await axios.post("/contacts", body);
        dispatch(addContacts(data));
    };
    export const deleteContact = id => async dispatch => {
        const { data } = await axios.delete(`/contacts/${id}`);
        dispatch(deleteContacts(data.id));
    };

}



