import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

const Topbar = (props: any)=> {
    return(
        <AppBar
          position="fixed"
          color="inherit"
          className={clsx(props.classes.appBar, {
            [props.classes.appBarShift]: props.open,
          })}
        >
            
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
              edge="start"
              className={clsx(props.classes.menuButton, {
                [props.classes.hide]: props.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Todo
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Topbar;