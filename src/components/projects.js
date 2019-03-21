import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(params) {
        if (this.state.activeTab === 0) {
            return (<div><h1>Javascript</h1></div>)
        } else if (this.state.activeTab === 1) {
            return (<div><h1>NodeJS</h1></div>)
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{color: '#fff', height:'176', background:'url() center/ cover'}}></CardTitle>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (<div><h1>AngularJs</h1></div>)
        } else {
            return (<div><h1>Projects not added yet</h1></div>)
        }
    }

    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>React</Tab>
                    <Tab>AngularJs</Tab>
                    <Tab>Java</Tab>
                    <Tab>GraphQL</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;