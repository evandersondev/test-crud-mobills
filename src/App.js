import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import GlobalStyle from "./styles/global";
import { Container } from "./styles";

// import Home from "./pages/Home";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Header />
        <Home />
        <GlobalStyle />
      </Container>
    </Provider>
  );
}

export default App;
