
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { AllCategories } from "./components/Categories";
import { Chinese } from "./components/Categories";
import { Indian } from "./components/Categories";
import { Japanese } from "./components/Categories";
import { Korean } from "./components/Categories";
import { Malaysian } from "./components/Categories";
import { Singaporean } from "./components/Categories";
import { Taiwanese } from "./components/Categories";
import { Thai } from "./components/Categories";
import { Vietnamese } from "./components/Categories";
import { AllQuickRecipes } from "./components/MiniRecipes";
import { Details } from "./components/Details";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/All" exact component={AllCategories} />
                    <Route path="/Chinese" exact component={Chinese} />
                    <Route path="/Indian" exact component={Indian} />
                    <Route path="/Japanese" exact component={Japanese} />
                    <Route path="/Korean" exact component={Korean} />
                    <Route path="/Malaysian" exact component={Malaysian} />
                    <Route path="/Singaporean" exact component={Singaporean} />
                    <Route path="/Taiwanese" exact component={Taiwanese} />
                    <Route path="/Thai" exact component={Thai} />
                    <Route path="/Vietnamese" exact component={Vietnamese} />
                    <Route path="/QuickRecipes" exact component={AllQuickRecipes} />
                    <Route path="/Details" exact component={Details} />

                </Switch>
            </Router>
        )
    }
}