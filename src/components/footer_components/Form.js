// This is for subscribe and download form
import React from "react";

const Form = () => {
  return (
    <React.Fragment>
      {/* <div className="container-fluid"> */}
      <div className="row margin-bottom-none border-bottom-light padding-bottom-16">
        <div className="container">
          <div className="justify-center display-flex">
            <div className="col l8 margin-auto">
              <div className="row margin-bottom-none">
                <div className="col m6 padding-right-48">
                  <div className="row margin-bottom-none">
                    <div className="col s12">
                      <h5 className="margin-bottom-2 font-size-16 font-weight-700 text-grey float-left">
                        Subscribe
                      </h5>
                    </div>
                    <div className="col s12">
                      <form className="DownloadSMSform subscribeForm">
                        <div className="width-100">
                          <ul className="list-inline customNewCheck padding-y-4 margin-none">
                            <li className="list-inline-item display-inline-block">
                              <input type="checkbox" id="OffersCheck" />
                              <label
                                className="font-size-14 text-grey margin-bottom-8 display-inline-block"
                                htmlFor="OffersCheck"
                              >
                                Offers
                              </label>
                            </li>
                            <li className="list-inline-item display-inline-block">
                              <input type="checkbox" id="BrandsCheck" />
                              <label
                                className="font-size-14 text-grey margin-bottom-8 display-inline-block"
                                htmlFor="BrandsCheck"
                              >
                                Brands
                              </label>
                            </li>
                            <li className="list-inline-item display-inline-block">
                              <input type="checkbox" id="allCheck" />
                              <label
                                className="font-size-14 text-grey margin-bottom-8 display-inline-block"
                                htmlFor="allCheck"
                              >
                                All
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="formFild margin-top-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="E-Mail"
                          />
                          <button className="form-button">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col m6 padding-left-48">
                  <div className="row margin-bottom-none">
                    <div className="col-12 padding-left-8">
                      <h5 className="margin-bottom-2 font-size-16 font-weight-700 text-grey float-left">
                        Download
                      </h5>
                    </div>
                    <div className="col s12 width-100">
                      <ul className="list-inline padding-top-4 padding-bottom-8 margin-none DownloadAppNew">
                        <li className="list-inline-item display-inline-block">
                          <a href="index.html">
                            <img
                              className=""
                              src="images/apple-icon.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="list-inline-item display-inline-block">
                          <a href="index.html">
                            <img className="" src="images/pl.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col s12">
                      <form className="DownloadSMSform">
                        <div className="formFild margin-top-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Download via SMS"
                          />
                          <button className="form-button">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};
export default Form;
