import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";

import { MenuIcon, NotificationsIcon } from "./Icons";
import { drawerWidth } from "./dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#052f5f",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarSpacer: theme.mixins.toolbar,
  menuButton: {
    marginRight: 24,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

function Appbar({ handleDrawerOpen, notifications, open, title }) {
  const styles = useStyles();

  return (
    <AppBar
      className={clsx(styles.appBar, open && styles.appBarShift)}
      position="absolute"
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          color="inherit"
          className={clsx(styles.menuButton, open && styles.menuButtonHidden)}
          edge="start"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={styles.title}
          color="inherit"
          component="h1"
          noWrap
          variant="h6"
        >
          {title}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={notifications.length} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
