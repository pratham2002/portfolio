import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/landingpage';
import AboutMePage from './components/aboutme';
import ContactPage from './components/contact';
import ProjectsPage from './components/projects';
import ResumePage from './components/resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}> </Route>
        <Route path="/aboutme" component={AboutMePage}> </Route>
        <Route path="/contact" component={ContactPage}> </Route>
        <Route path="/projects" component={ProjectsPage}> </Route>
        <Route path="/resume" component={ResumePage}> </Route>
    </Switch>
)

export default Main;