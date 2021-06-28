import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
   return ( <Link to="/home">
                <button id="home">Home</button>
            </Link> )
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
   
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Gifstagram
          </Typography>
          {
            <div>
          <IconButton 
            edge="start" 
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                <MenuItem onClick={handleClose}>
                  <Link to="/home">
                    <Button id="home">Home</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/posts">
                    <Button id="posts">View Posts</Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/post/new">
                    <Button id="newPost">Add Post</Button>
                  </Link>
                </MenuItem>
            </ButtonGroup>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar