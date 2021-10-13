import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Register from "./Components/Register";
import UserForm from "./Components/UserForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />

      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
};

export default Router;
