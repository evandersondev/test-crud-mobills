import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <AppBar className="header" color="transparent" position="static">
        <Toolbar>
          <Typography className="text-logo" variant="h1">
            Mobills
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
