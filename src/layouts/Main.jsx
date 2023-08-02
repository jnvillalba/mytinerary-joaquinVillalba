import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Main = ({ children }) => {
  return (
      <>
          <Header />
          {children}
          <Footer />
      </>
  )
}

export default Main