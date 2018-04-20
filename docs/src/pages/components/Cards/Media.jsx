import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, Card, CardContent, CardImage, Typography } from 'react-rainbow';

const styles = theme => ({
    main: {
        width: 300,
    },
    title: {
        marginBottom: 10,
    },
    image: {
        height: 180,
    }
});

const Media = props => {
    const { classes } = props;
    return (
        <Card className={classes.main}>
            <CardImage 
                className={classes.image}
                src="https://www.twt.edu.cn/upload/banners/02JASBCOAeP1AGUzo55M.jpeg"
            />
            <CardContent>
                <Typography className={classes.title} type="title">北洋故事｜见筑北洋</Typography>
                <Typography>
                    北洋校园的巍峨楼宇，它们似是自有永有地，
                    矗立在平实之中、变革之上，喧嚣之外、安宁之里。
                </Typography>
            </CardContent>
        </Card>
    );
};

Media.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Media);