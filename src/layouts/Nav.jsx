import React from "react";
import ViewCartButton from "../components/ViewCartButton";

const Nav = () => {
  return (
    <section className="">
      <nav className="navbar bg-body-tertiary shadow fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand  fw-bold fs-2">CyberTech</a>
          <ViewCartButton/>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
