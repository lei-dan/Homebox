import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  List,
  Divider,
  IconButton,
} from "@material-ui/core";

import { ChevronLeftIcon } from "./Icons";
import { drawerWidth } from "./dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    whiteSpace: "nowrap",
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: 56,
    },
  },
  toolbarIcon: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

function AppMenu({
  handleDrawerClose,
  mainListItems,
  open,
  secondaryListItems,
}) {
  const styles = useStyles();

  return (
    <Drawer
      classes={{
        paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
      }}
      open={open}
      variant="permanent"
    >
      <div className={styles.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}

export default AppMenu;
