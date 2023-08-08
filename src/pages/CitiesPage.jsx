import React from "react";
import Main from "../layouts/Main";
import Cities from "../components/Cities/Cities";
import Header from "../components/Header/Header";

const CitiesPage = () => {
  return (
    <Main background="/cities-bg.jpeg">
      <Header textColor="#fff"/>
      <Cities />
    </Main>
  );
};

export default CitiesPage;
