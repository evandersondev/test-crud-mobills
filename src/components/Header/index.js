import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Container } from "./styles";

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <AppBar className="header" color="transparent" position="static">
        <Toolbar className="subHeader">
          <Typography className="text-logo" variant="h1">
            <img className="logo" src={Logo} alt="logo" />
            Control of Expenses
          </Typography>
          <Typography variant="caption">made by evanscodes</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
