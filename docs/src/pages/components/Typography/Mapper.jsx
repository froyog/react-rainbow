import React from 'react';
import { Typography } from 'react-rainbow';

const Mapper = () => {
    return (
        <Typography 
            type="title"
            componentMapper={{ title: 'h4' }} 
        >
            This renders a h4 title
        </Typography>
    );
};

export default Mapper;