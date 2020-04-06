import React from 'react';
import './style.css';
import { Grid, Cell } from 'react-mdl';

const LandingPage = () => (
    <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
            <Cell col={3}>
                <img
                    src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
                    alt="img-avatar"
                    className="img-avatar"
                />
            </Cell>
            <Cell col={9}>
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr />
                    <p>JavaScript | HTML/CSS | React | NodeJS | Express</p>
                    <div className="social-links">
                        {/* Github  */}
                        <a href="https://github.com/riteshf" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/riteshfirodiya/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/ritesh.firodiya.58" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
);

export default LandingPage;