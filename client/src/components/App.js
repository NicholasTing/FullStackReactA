import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Games from './games/Game';
import AboutMe from './AboutMe';

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
            
            <BrowserRouter>
                <div className="container">
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
                <Route path="/games" component={Games} />
                <Route path="/aboutme" component={AboutMe} />
                
                </div>
            </BrowserRouter>
        
        )
    }
};

export default connect (null, actions)(App);