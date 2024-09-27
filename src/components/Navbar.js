// src/components/Navbar.js
import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Create Todo
          </Button>
          <Button color="inherit" component={Link} to="/list">
            Todo List
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
