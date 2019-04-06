
import React from 'react';
import { Grid, Cell } from 'react-mdl';

const CustomGrid = (props) => (
    <Grid>
        {props.gridCells.forEach(grid => (
            <div>
                <Cell col={3}>
                    <h6>{grid.year}</h6>
                </Cell>
                <Cell col={9}>
                    <h6>{grid.name}</h6>
                    <p>{grid.description}</p>
                </Cell>
            </div>
        ))}
    </Grid>
);

export default CustomGrid;
