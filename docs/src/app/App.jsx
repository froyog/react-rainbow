import React from 'react';
import { Switch, Route } from 'react-router';
import injectSheets from 'react-jss';
import Home from './Home';
import Header from './Header';
// import Pages from './Docs';

const styles = theme => ({
    main: {
        margin: '50px auto 0',
        maxWidth: 1200,
        position: 'relative',
        minHeight: '100vh',
    },
});

const App = props => {
    const { classes } = props;
    return (
        <div>
            <Header />
            <main className={classes.main}>
                <Switch>
                    <Route path="/" component={Home} />
                    {/* <Route path="/docs" component={Docs} /> */}
                </Switch>
            </main>
        </div>
    );
};

export default injectSheets(styles)(App);