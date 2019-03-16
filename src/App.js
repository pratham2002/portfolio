import React, { Component } from 'react';
import './App.css';
import Main from './route';
import { Link } from 'react-router-dom'

import { Layout, Header, Navigation, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      < div className="demo-big-content" >
        <Layout>
          <Header title="Ritesh Firodiya" scroll className="header-color">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div >
    );
  }
}

export default App;
