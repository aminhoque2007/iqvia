import * as types from '../constants/ActionTypes';
import {
    // addContactRequest,
    // deleteContactRequest,
    getContactsRequest,
    postToGqlApi,
    // updateContactRequest,
} from '../services/contact.service';

export const addContactAction = ({ email, name }: any) => {
    return (dispatch: any) => {
        const query = JSON.stringify({
            query: `mutation {
            addContact(contact: {name: "${name}", email: "${email}"}) {
    name,
    id,
    email
  }
}`,
        });
        postToGqlApi(query)
            .then(({ data }) => {
                dispatch(addContactSuccess(data.addContact));
            })
            .catch(err => console.error(err));
    };
};

export const deleteContactAction = (id: string) => {
    return (dispatch: any) => {
        const query = JSON.stringify({
            query: `mutation {
            deleteContact(id: "${id}")
}`,
        });
        postToGqlApi(query)
            .then((res: any) => {
                dispatch(deleteContactSuccess(id));
            })
            .catch(err => console.error(err));
    };
};
export const getContactsAction = () => {
    return (dispatch: any) => {
        getContactsRequest()
            .then(({ data }) => {
                dispatch(getContactsSuccess(data.contacts));
            })
            .catch(err => console.error(err));
    };
};

export const updateContactAction = ({ id, name, email }: any) => {
    return (dispatch: any) => {
        const query = JSON.stringify({
            query: `mutation {
            updateContact(contact: {id: "${id}", name: "${name}", email: "${email}"}) {
    name,
    id,
    email
  }
}`,
        });
        postToGqlApi(query)
            .then(({ data }) => {
                dispatch(updateContactSuccess(data.updateContact));
            })
            .catch(err => console.error(err));
    };
};

const addContactSuccess = (payload: any) => {
    return {
        type: types.ADD_CONTACT_SUCCESS,
        payload,
    };
};

const deleteContactSuccess = (id: string) => {
    return {
        type: types.DELETE_CONTACT_SUCCESS,
        payload: id,
    };
};

const updateContactSuccess = (payload: any) => {
    return {
        type: types.UPDATE_CONTACT_SUCCESS,
        payload,
    };
};

const getContactsSuccess = (payload: any) => {
    return {
        type: types.GET_CONTACTS_SUCCESS,
        payload,
    };
};
