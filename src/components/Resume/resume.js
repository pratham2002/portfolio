import React from 'react';
import { Grid, Cell } from 'react-mdl';


import './style.css';

const Resume = () => (
    <div className="resume-body">
        <Grid>
            <Cell col={4}>
                <div style={{ textAlign: 'center' }}>
                    <img
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style={{ height: '200px' }}
                    />
                </div>
                <h2 style={{ paddinTop: '2em' }}>Ritesh Firodiya</h2>
                <h4 style={{ color: 'grey' }}>Programmer</h4>
                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                <p>
                    A Passionate Web Developer, interested in all the shit in
                    this world and having a desire to explore every corner of the world.
                </p>
                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                <h5>Address</h5>
                <p>Flat No. 403, Shri Niwas, Vasant-Vastu, Maharshi Nagar, Pune, Maharashtra, India</p>
                <h5>Phone</h5>
                <p>(+91) 9226737797</p>
                <h5>Email</h5>
                <p>firodiya.ritesh@gmail.com</p>
                <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            </Cell>
            <Cell col={8} className="resume-right-col">
                Right Side
            </Cell>
        </Grid>

    </div>
);

export default Resume;