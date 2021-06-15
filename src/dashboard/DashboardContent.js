import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";

import { Integrations, Reports, Users } from "../pages/Pages";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  title: {
    flexGrow: 1,
  },
  wrapper: {
    display: "flex",
  },
}));

function DashboardContent() {
  const styles = useStyles();

  return (
    <main className={styles.content}>
      <div className={styles.appBarSpacer} />
      <Container className={styles.container} maxWidth="lg">
        <Switch>
          <Route path="/integrations">
            <Integrations />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Container>
    </main>
  );
}

export default DashboardContent;
