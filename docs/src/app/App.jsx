import React from 'react';
import { Switch, Route } from 'react-router';
import injectSheets from 'react-jss';
import Home from './Home';
import Header from './Header';
import Docs from './Docs';

const styles = theme => ({
    root: {
        minHeight: '100vh',
    },
    main: {
        margin: '50px auto 0',
        maxWidth: 1200,
        position: 'relative',
    },
});

const App = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.main}>
                <Switch>
                    <Route exact path="/react" component={Home} />
                    <Route path="/react/docs" component={Docs} />
                </Switch>
            </main>
        </div>
    );
};

export default injectSheets(styles)(App);