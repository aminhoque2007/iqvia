import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import ContactCard from './ContactCard';
import Grid from '@material-ui/core/Grid';

import {
    deleteContactAction,
    getContactsAction,
    updateContactAction,
} from '../../store/contacts.actions';
import ContactForm from '../../shared/AddUpdateContactForm';
import {Link} from "react-router-dom";

class ViewEditPage extends Component<any, { isOpen: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    componentDidMount = () => {
        this.props.getContacts();
    };

    handleDelete = (id: string) => {
        this.props.deleteContact(id);
        this.props.history.push('/');
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { email, name } = e.target;
        if (email.value && name.value) {
            const contact = {
                id: this.props.contact.id,
                name: e.target.name.value,
                email: e.target.email.value,
            };
            this.props.updateContact(contact);
            this.toggleModal();
        }
    };

    toggleModal = () => {
        this.setState(() => ({ isOpen: !this.state.isOpen }));
    };

    render() {
        return (
            <Fragment>
                <ContactForm
                    formTitle="Update details"
                    handleSubmit={this.handleSubmit}
                    isOpen={this.state.isOpen}
                    primaryButton="Save"
                    toggleModal={this.toggleModal}
                />
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '30vh' }}
                >
                    <ContactCard
                        contact={this.props.contact}
                        handleDelete={this.handleDelete}
                        toggleModal={this.toggleModal}
                    />
                </Grid>
                <Link to="/">Back</Link>
            </Fragment>
        );
    }
}

const mapStateToProps = (state: any, props: any) => {
    const entityId = props.match.params.id;
    let contact = {};
    if (state && state.length > 0) {
        contact = state.find((contact: any) => contact.id === entityId);
    }

    return {
        contact,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        deleteContact: (id: string) => dispatch(deleteContactAction(id)),
        getContacts: () => dispatch(getContactsAction()),
        updateContact: (contact: any) => dispatch(updateContactAction(contact)),
    };
};

export default connect<any, any, {}>(
    mapStateToProps,
    mapDispatchToProps
)(ViewEditPage);
