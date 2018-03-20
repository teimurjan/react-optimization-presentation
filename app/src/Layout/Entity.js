import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/HomeContainer';
import About from '../About/AboutContainer';
import Features from '../Features/FeaturesContainer';

export default () => (
    <div className="row">
        <div className="col-md-12">
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/features' component={Features}/>
                <Route path='/about' component={About}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    </div>
);