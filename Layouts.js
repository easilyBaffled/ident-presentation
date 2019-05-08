import React from 'react';
import styled from '@emotion/styled';
import theme from './theme'

export const Grid = styled.div(( { count, area } ) => ( {
    maxHeight: '95vh',
    maxWidth: '95vw',
    display: 'grid',
    gridTemplateColumns: `repeat(${count}, max-content)`, // What's the difference between min and max content?
    gridAutoRows: 'min-content',
    gridColumnGap: 10,
    gridRowGap: 20,
    fontSize: 'smaller',
    alignItems: 'center',
    textAlign: 'left',
    background: '#222',
    margin: 'auto',
    padding: 10,
    "& pre > code span.token.console, & pre > code span.token.console+.token,  & pre > code span.token.console+.token+.property-access": {
        color: '#0af',

    },
    ...(area ? { gridTemplateAreas: area } : {} ),
    '& > *': {
        height: '100%',
        background: theme.colors.background,
        boxSizing: 'border-box',
        padding: '.8em 1em',
        margin: '0',
        display: 'flex',
        alignItems: 'center'
    },
    ...(area ? {
    '& > *:nth-child(1n)': {
        gridArea: 'a'
    },
    '& > *:nth-child(2n)': {
        gridArea: 'b'
    },
    '& > *:nth-child(3n)': {
        gridArea: 'c'
    } } : {} ),
} ) );

export const Columns = count => ({ children, area }) => (
    <Grid area={area} count={count} length={React.Children.toArray(children).length}>
        {React.Children.toArray(children)}
    </Grid>
);

Columns.two = Columns(2);
Columns.three = Columns(3);
Columns.four = Columns(4);

