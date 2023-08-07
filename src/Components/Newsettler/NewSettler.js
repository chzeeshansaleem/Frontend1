import React from "react";

const NewSettler = () => {
  return (
    <>
      <div className="container-fluid bg-info">
        <div className="row justify-content-between">
          <div class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-solid fa-truck-fast fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Fast Delivery</h3>
            </div>
            <div class="p-2 bd-highlight">Free delivery on all orders</div>
          </div>
          <div class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-regular fa-credit-card fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Secure Payment</h3>
            </div>
            <div class="p-2 bd-highlight ">Save your all payment methods</div>
          </div>
          <div class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-solid fa-money-bill-transfer fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Money-Back Guarantee</h3>
            </div>
            <div class="p-2 bd-highlight ">100 % Money back guarantee </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSettler;
