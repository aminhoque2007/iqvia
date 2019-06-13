import React, { Component } from "react";
import { connect } from 'react-redux';
import Router from "./Router";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

import "./App.css";
import { getContactsAction } from "./store/contacts.actions";

interface IMapStateToProps {}
interface IMapDispatchToProps {
    getContacts: () => void;
}
type AppProps = IMapStateToProps & IMapDispatchToProps;

class App extends Component<AppProps, {}> {
    componentDidMount = () => {
        this.props.getContacts();
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Contacts</h1>
                </header>
                <Router/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        getContacts: () => dispatch(getContactsAction()),
    };
};
export default connect<IMapStateToProps, IMapDispatchToProps, {}>(null, mapDispatchToProps)(App);
