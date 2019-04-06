import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ReactProjects from './ReactProjects';
import './style.css';


function Projects() {
    const [activeTab, setActiveTab] = useState(0);
    
    function toggleCategories() {
        if (activeTab === 0) {
            return (
                <div className="projects-grid">
                    <ReactProjects />
                    <ReactProjects />
                </div>
            )
        } else if (activeTab === 1) {
            return (
                <div className="projects-grid">
                    <h1>Javascript</h1>
                </div>
            )
        } else if (activeTab === 2) {
            return (<div className="projects-grid"><h1>NodeJS</h1></div>)
        } else if (activeTab === 3) {
            return (<div className="projects-grid"><h1>AngularJs</h1></div>)
        } else {
            return (<div><h1>Projects not added yet</h1></div>)
        }
    }

    return (
        <div className="catagory-tabs">
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
                <Tab>React</Tab>
                <Tab>JavaScript</Tab>
                <Tab>NodeJS</Tab>
                <Tab>AngularJs</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">
                        {toggleCategories()}
                    </div>
                </Cell>
            </Grid>
        </div>
    )

}

export default Projects;