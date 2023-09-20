import React, { useState } from "react";
import Nav from "./Nav";

import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function Header() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {

    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div>
        <header className="header">
          <h1 className="headername"> Anthony Cardozo</h1>

          <Nav
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
      </div>
      {

        renderPage(currentPage)
      }
    </div>
  );
}



export default Header;