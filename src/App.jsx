import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Card, { CardContent, CardImage, CardAction } from './Card';
import Typography from './Typography';
import demo from './demo.jpeg';


const styles = theme => ({
    card: {
        width: '320px',
    },
    cardImage: {
        height: '200px',
    },
    action: {
        margin: 0,
        marginLeft: 8,
    },
    title: {
        marginBottom: theme.spacer,
        color: '#fff',
    },
});

const App = ({ classes }) => {
    return (
        <Card
            className={classes.card}
            inverse
        >
            <CardImage 
                className={classes.cardImage}
                src={demo}
            />
            <CardContent>
                <Typography type="title" className={classes.title}>
                    北洋故事｜见筑北洋
                </Typography>
                北洋校园的巍峨楼宇，它们似是自有永有地，矗立在平实之中、变革之上，喧嚣之外、安宁之里。
            </CardContent>
            <CardAction>
                <p className={classes.action}>TAKE THIS ACTION</p>
            </CardAction>
        </Card>
    )
};

export default injectSheet(styles)(App);