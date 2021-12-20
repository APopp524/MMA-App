import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "./Context";
import Logout from "./pages/auth/Logout";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import logoIcon from "./assets/logo.svg"

import { ChevronLeft, Menu } from "@material-ui/icons";
import { SidebarData } from "./pages/main/SidebarData";
import { isTemplateExpression } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      color: "black",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: "white",
      flexGrow: 1,
    },
    link: {
      marginRight: 20,
      textDecoration: 'none',
      display: "flex",
      padding: "8px 0px 8px 16px"
    },
  })
);

export default function Header() {
  const [open, setOpen] = useState(false);

  const context = React.useContext(PostsContext);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
            <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
            {SidebarData.map((item, index) => {
              return (
                <ListItem key={index} className={item.cName}>
                  <Button variant="text" color="primary">
                  <Link
                    className={classes.link}
                    color="textPrimary"
                    to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                  </Link>
                      </Button>
                </ListItem>
              );
            })}
        </List>
      </SwipeableDrawer>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.title} to="/">
                Fighterz
              </Link>
            </Typography>
            <Link to="/login">
              <IconButton
                edge="start"
                className={classes.logo}
                color="inherit"
                aria-label="menu"
              >
                <img src={logoIcon} /> 
              </IconButton>
            </Link>
            {context.user.id ? (
              <>
                <Logout />
                <Link to="/users">
                  <Button variant="contained" color="primary">
                    Users
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <Button variant="contained" color="primary">
                    Signup
                  </Button>
                </Link>{" "}
                <Link to="/login">
                  <Button variant="contained" color="secondary">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
