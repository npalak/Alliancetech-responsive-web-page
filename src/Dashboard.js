import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import App1 from "./App1.js";
import "./styles.css";
import Responsive from "react-responsive";
const drawerWidth = 180;

const Desktop = (props) => <Responsive {...props} minWidth={768} />;
const Mobile = (props) => <Responsive {...props} maxWidth={767} />;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className="toolbar">
            <Typography variant="h6" noWrap>
              Clipped drawer{" "}
              <small>Drag and drop the pictures in order to show.</small>
            </Typography>
          </Toolbar>
        </AppBar>
        <Desktop>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                {["All", "Social Innovation"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />{" "}
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Desktop>

        <Mobile>
          <Drawer
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                {["All", "Social Innovation"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />{" "}
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Mobile>
        <main className={classes.content}>
          <Toolbar />
          <App1 />
        </main>
      </div>
    </div>
  );
}
