import React, { useState } from "react";
import Nav from "../Navbar/navbar";
import Foot from "../Footer/footer";
import Home from "../../pages/Home";
import Explore from "../../pages/Explore";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Explore") {
      return <Explore />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Foot currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
