import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add',contact => ({
    payload: {
        id: uuidv4(),
        name: contact.name,
        number: contact.number,
    },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };