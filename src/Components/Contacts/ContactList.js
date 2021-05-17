import React from 'react'
import PropTypes from "prop-types";
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../Redux/Phonebook/contacts-actions';

const ContactList = ({contacts, onDeleteContact})=>(
    <ul className={styles.list}>
        {contacts.map(({id, name, number})=>(
                <li key={id}>
                    <p className={styles.contact}>{name}: {number}</p>
                    <button className={styles.delete} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            )
        )}
    </ul>
);
ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
        })),
};
const filteredContacts =(allContacts, filter)=>{
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
    contacts: filteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);