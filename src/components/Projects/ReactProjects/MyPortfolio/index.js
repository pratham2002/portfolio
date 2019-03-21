import React from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

const MyPortfolioInReact = () => (
    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQWR1h2Dzvwrwd4Fmb39hAp1HrgDVz8SPGn0TBaQxgmiIE4jM) center/ cover' }}>
                My Portfolio Site</CardTitle>
            <CardText>
                A portfolio project created in react.
        </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
);

export default MyPortfolioInReact;