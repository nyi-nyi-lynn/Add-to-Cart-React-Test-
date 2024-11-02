import React from "react";
import "../assets/css/backdrop.css";
import CartList from "./CartList";
const Backdrop = () => {
  return (
    <>
      <section className="backdrop">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h1 className="modal-title text-center fw-bold  w-100 fs-3" id="exampleModalLabel">
                 Your Cart
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <CartList/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-info">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Backdrop;
