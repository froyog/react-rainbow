import React from 'react';
import { Button } from 'react-rainbow';

const ButtonDemo = props => {
    const { classes } = props;
    return (
        <Button elevate="raised" color="primary">GET STARTED</Button>
    );
};

export default ButtonDemo;