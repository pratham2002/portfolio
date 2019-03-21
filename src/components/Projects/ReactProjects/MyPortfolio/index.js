import React from 'react';
import RFCard from '../../../../Views/RFCard'

const card = {
    style: { minWidth: '450', margin: 'auto' },
    cardTitle: {
        style: { color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQWR1h2Dzvwrwd4Fmb39hAp1HrgDVz8SPGn0TBaQxgmiIE4jM) center/ cover' },
        body: "My Portfolio Site"
    },
    cardText: {
        "body": "A portfolio project created in react."
    },
    acctionButtons: ['Github'],
    cardMenu: {
        style: { color: '#fff' }
    }
};

const MyPortfolioInReact = () => (
    <RFCard card={card}/>
);

export default MyPortfolioInReact;