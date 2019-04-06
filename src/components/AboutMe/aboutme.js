import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import './style.css';

function AboutMe() {
    return (
        <div className="contactme-body">
            <Grid className="contactme-grid">
                <Cell col={6}>
                    <h2>Ritesh Firodiya</h2>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{ height: '250px' }}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        A Passionate Web Developer, interested in all the shit in this workd and having a desire to explore every corner of the world.
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contactme-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (+91) 9226737797
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    firodiya.ritesh@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    riteshfirodiya
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div >
    )
}

export default AboutMe;