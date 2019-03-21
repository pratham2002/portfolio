import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import AboutMePage from './components/AboutMe';
import ContactPage from './components/contact';
import ProjectsPage from './components/Projects';
import ResumePage from './components/resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}> </Route>
        <Route path="/aboutme" component={AboutMePage}> </Route>
        <Route path="/contact" component={ContactPage}> </Route>
        <Route path="/projects" component={ProjectsPage}> </Route>
        <Route path="/resume" component={ResumePage}> </Route>
    </Switch>
)

export default Main;