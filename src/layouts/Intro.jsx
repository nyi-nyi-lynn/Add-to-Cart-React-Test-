import React from "react";
import Nav from "./Nav"
const Intro = () => {
  return (
    <>
      <Nav />
      
      <section className="container p-5 mt-5 rounded-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className="display-4 fw-bold text-center mt-5">
                Welcome To Our Site
              </h1>
              <p className=" fs-5  text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis hic quos saepe ducimus rem aperiam repudiandae modi
                nulla, quaerat in ea ipsum repellendus? Exercitationem eum
                officia velit autem, amet dolorum?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-info btn-lg text-white me-3 ">
                  Get Started{" "}
                </button>
                <button className="btn btn-outline-info btn-lg">
                  Learn more
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img src="../assets/imgs/banner/banner.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
