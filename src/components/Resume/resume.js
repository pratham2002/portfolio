import React from 'react';
import { Grid, Cell } from 'react-mdl';


import './style.css';
import CustomGrid from './CustomGrid';

const Resume = () => {

    const tables = {
        'Experience': [{
            year: '2017 - current',
            name: 'Confluxsys Private Limited, Pune',
            description: ''
        }],
        // 'Education': [
        //     {
        //         year: '2013 - 2017',
        //         name: `Pune Vidyarti Griha's College of Engineering and Technology, Pune`,
        //         description: `A private orginization oriented towards building software products for security management,
        //         with a small team of around 30+ members, helped me expand my horizon over professional and
        //         trending technologies to build reliable solutions to adhere with customer needs.`,
        //     },
        //     {
        //         year: '',
        //         name: 'Vishwakerma Institue of Technology, Pune',
        //         description: `Jr. College, where for the first time, I was introducted to HTML and CSS, and ended up rooting
        //         me in web development industry.
        //         A life full of adventure and awesome friends that always do the most craziest things you could imagine`
        //     },
        //     {
        //         year: '',
        //         name: 'Shri Sharda English Medium School, Ahmednaga',
        //         description: 'My School'
        //     }
        // ]
    }

    return (
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
                    {Object.keys(tables).forEach(key => (
                        <div>
                            <h2>{key}</h2>
                            <CustomGrid gridCells={tables[key]} />
                        </div>
                    ))}
                </Cell >
            </Grid >

        </div >
    );
}

export default Resume;