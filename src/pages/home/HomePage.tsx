import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import ContactList from './ContactList';
import AddUpdateContactForm from '../../shared/AddUpdateContactForm';
import { Button } from '@material-ui/core';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { addContactAction } from '../../store/contacts.actions';

export class HomePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { email, name } = e.target;
        if (email.value && name.value) {
            const contact = {
                name: e.target.name.value,
                email: e.target.email.value,
            };
            this.props.addContact(contact);
            this.toggleModal();
        }
    };

    toggleModal = () => {
        this.setState(() => ({ isOpen: !this.state.isOpen }));
    };
    render() {
        if (this.props.contacts) {
            return (
                <Fragment>
                    <AddUpdateContactForm
                        formTitle="Add contact"
                        handleSubmit={this.handleSubmit}
                        isOpen={this.state.isOpen}
                        primaryButton="Submit"
                        toggleModal={this.toggleModal}
                    />
                    <ContactList {...this.props} />
                    <Button
                        size="small"
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                            position: 'absolute',
                            top: '56%',
                            right: '23%',
                        }}
                        onClick={this.toggleModal}
                    >
                        New Contact
                    </Button>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Button>Add</Button>
                    <AddUpdateContactForm
                        handleSubmit={this.handleSubmit}
                        isOpen={this.state.isOpen}
                        primaryButton="Submit"
                        toggleModal={this.toggleModal}
                    />
                </Fragment>
            );
        }
    }
}
const mapStateToProps = (state: any) => {
    return {
        contacts: state,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        addContact: (contact: any) => dispatch(addContactAction(contact)),
    };
};

export default connect<any, any, {}>(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
