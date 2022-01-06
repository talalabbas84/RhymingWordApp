import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles(() => ({
  root: {
    padding : 0,
    margin: 0,
    backgroundColor: "#fafafa"
  },
  bar : {
    height: "64px"
  }
}));


const Layout = React.memo(({ children }) => {
  const classes = useStyles();
 return( <Paper
    elevation={0}
    className={classes.root}
  >
    <AppBar color="primary" position="static" className={classes.bar}>
      <Toolbar className={classes.bar}>
        <Typography color="inherit">WORD RHYME</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
)});

export default Layout;