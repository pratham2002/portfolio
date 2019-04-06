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
                <div>
                    <h2>Experience</h2>
                    <Grid>
                        <Cell col={3}>
                            <h6>2017 - current</h6>
                        </Cell>
                        <Cell col={9}>
                        <h6>Confluxsys Private Limited, Pune</h6>
                            <p>A private orginization oriented towards building software products for security management, 
                                with a small team of around 30+ members, helped me expand my horizon over professional and 
                                trending technologies to build reliable solutions to adhere with customer needs.
                            </p>
                        </Cell>
                    </Grid>
                </div>
                <div>
                    <h2>Education</h2>
                    <Grid>
                        <Cell col={3}>
                            <h6>2013 - 2017</h6>
                        </Cell>
                        <Cell col={9}>
                            <h6>Pune Vidyarti Griha's College of Engineering and Technology, Pune</h6>
                            <p>A place where I undergraduated from with my bachelorette degree in Computer Science Engineering,
                                lots of cool and interesting stuff I learned here mostly theory,
                                but a did provide me a excellent conceptional base to roar in IT Indusrty
                            </p>
                        </Cell>
                        <Cell col={3}>
                            <h6>2011 - 2013</h6>
                        </Cell>
                        <Cell col={9}>
                            <h6>Vishwakerma Institue of Technology, Pune</h6>
                            <p>Jr. College, where I was fort eh first time introducted to HTML and CSS, and ended up rooting
                                me in web development. A life full of adventure and awesome friends that always do the most craziest things you could imagine,
                                still alive!.
                            </p>
                        </Cell>
                        <Cell col={3}>
                            <h6>2000 - 2011</h6>
                        </Cell>
                        <Cell col={9}>
                            <h6>Shri Sharda English Medium School, Ahmednagar</h6>
                            <p>My School
                            </p>
                        </Cell>
                    </Grid>
                </div>
            </Cell>
        </Grid>

    </div>
);

export default Resume;