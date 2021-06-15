import React from "react";
import clsx from "clsx";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    minHeight: 300,
    padding: theme.spacing(2),
    overflow: "auto",
  },
  fixedHeight: {
    height: 240,
  },
}));

export function Page({ title }) {
  const styles = useStyles();
  const fixedHeightPaper = clsx(styles.paper, styles.fixedHeight);

  return (
    <Container maxWidth="lg">
      <Typography color="inherit" component="h1" noWrap variant="h6">
        {title}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export function Integrations() {
  return <Page title="Integrations" />;
}

export function Reports() {
  return <Page title="Reports" />;
}

export function Users() {
  return <Page title="Users" />;
}
