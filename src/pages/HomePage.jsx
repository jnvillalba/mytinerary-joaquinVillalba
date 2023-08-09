import React from "react";
import Main from "../layouts/Main";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <Main background="/home-bg.jpeg">
      <Hero />
    </Main>
  );
};

export default HomePage;
