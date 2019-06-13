import React  from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "./pages/home/HomePage"
import ViewEditPage from "./pages/view-edit-contact/ViewEditPage";
const Router = (props: any) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact/:id" component={ViewEditPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
