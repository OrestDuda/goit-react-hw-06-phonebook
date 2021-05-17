import React from 'react'
import PropTypes from "prop-types";
import styles from './Contacts.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../Redux/Phonebook/contacts-actions';

const ContactFilter = ({ searchQuery, onChange }) => (
    <label>
        Filter contacts by name
        <input className={styles.search} type="text" value={searchQuery} onChange={onChange} />
    </label>
);


ContactFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

const mapStateToProps = state => ({
    searchQuery: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);