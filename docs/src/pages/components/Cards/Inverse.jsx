import React from 'react';
import PropTypes from 'prop-types';
import { injectSheets, Card, CardContent, Typography } from 'react-rainbow';

const styles = theme => ({
    main: {
        width: 300,
    },
    title: {
        marginBottom: theme.spacer,
    },
});

const Media = props => {
    const { classes } = props;
    return (
        <Card className={classes.main} inverse>
            <CardContent>
                <Typography 
                    color="inherit"
                    className={classes.title} 
                    type="title"
                >
                    校园公告
                </Typography>
                <Typography color="inherit">
                    天津大学2017－2018学年第二批兼职辅导员选聘开始啦！
                </Typography>
                <Typography color="inherit">
                    第一期安全教育推送
                </Typography>
                <Typography color="inherit">
                    万名大学生“2018过年回家——我的幸福平安年” 活动通知
                </Typography>
            </CardContent>
        </Card>
    );
};

Media.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default injectSheets(styles)(Media);