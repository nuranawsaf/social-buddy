import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Post.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
    const { userId, id, title, body } = props.post;

        // ui card
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        
    return (
        <div className="body">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" onClick={() => alert('Settings Features Coming Soon !!!')}>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={title.toUpperCase()}
                    // subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="https://devbizops.files.wordpress.com/2020/04/135-choice-of-programming-language.jpg"
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" onClick={() => alert('Settings Features Coming Soon !!!')}>
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" onClick={() => alert('Settings Features Coming Soon !!!')}>
                    <ShareIcon />
                    </IconButton>

                    <Button variant="contained" color="primary">
                        <Link to={`/comment`} style={{ textDecoration: 'none' }}>Read More</Link>
                    </Button>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        User ID: {userId}
                    </Typography>
                    <Typography paragraph>
                        Post ID: {id}
                    </Typography>
                    <Typography paragraph>
                        <h3>{title.toUpperCase()}</h3>
                    </Typography>
                    <Typography paragraph>
                        {body}
                    </Typography>
                </CardContent>
             </Collapse>
            </Card>
        </div>
    );
};

export default Post;