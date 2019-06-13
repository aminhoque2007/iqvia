import {
    ADD_CONTACT_SUCCESS,
    DELETE_CONTACT_SUCCESS,
    GET_CONTACTS_SUCCESS,
    UPDATE_CONTACT_SUCCESS,
} from '../constants/ActionTypes';

export const contactReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_CONTACT_SUCCESS:
            return [...state, action.payload];
        case DELETE_CONTACT_SUCCESS:
            return [
                ...state.filter(
                    (contact: any) => contact.id !== action.payload
                ),
            ];
        case GET_CONTACTS_SUCCESS:
            return action.payload;
        case UPDATE_CONTACT_SUCCESS:
            return [
                ...state.filter(
                    (contact: any) => contact.id !== action.payload.id
                ),
                action.payload,
            ];
        default:
            return state;
    }
};
