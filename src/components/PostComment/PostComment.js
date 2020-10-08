import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PostComment = () => {
    const classes = useStyles();

    
    return (
        <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="People" secondary="Jan 7, 2014" />
      </ListItem>
    </List>
  );
}

export default PostComment;