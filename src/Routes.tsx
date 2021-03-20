
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { AllCategories } from "./components/Categories";
import { CategoryItem } from "./components/Categories/CategoryItem";
import { AllQuickRecipes } from "./components/MiniRecipes";
import { DetailsPage } from "./components/Details";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/AllRecipes" exact component={AllCategories} />
                    <Route path="/QuickRecipes" exact component={AllQuickRecipes} />
                    <Route path="/Category/:categoryName" exact component={CategoryItem} />
                    <Route path="/QuickRecipes" exact component={AllQuickRecipes} />
                    <Route path="/Details/:recipeName" exact component={DetailsPage} />

                </Switch>
            </Router>
        )
    }
}