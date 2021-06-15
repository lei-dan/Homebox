import React, { useState } from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";

import { MainListItems, SecondaryListItems } from "../listItems/ListItems";
import Appbar from "../Appbar";
import AppMenu from "../AppMenu";
import DashboardContent from "./DashboardContent";

export const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
  },
}));

function Dashboard({ notifications, title }) {
  const [open, setOpen] = useState(true);
  const styles = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <CssBaseline />

      <Appbar
        handleDrawerOpen={handleDrawerOpen}
        notifications={notifications}
        open={open}
        title={title}
      />

      <AppMenu
        handleDrawerClose={handleDrawerClose}
        mainListItems={MainListItems}
        open={open}
        secondaryListItems={SecondaryListItems}
      />

      <DashboardContent />
    </div>
  );
}

export default Dashboard;
