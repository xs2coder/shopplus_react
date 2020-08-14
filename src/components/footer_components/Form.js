// This is for subscribe and download form
import React from "react";

const Form = () => {
  return (
    <React.Fragment>
      {/* <div class="container-fluid"> */}
        <div class="row margin-bottom-none border-bottom-light padding-bottom-16">
          <div class="container">
            <div class="justify-center display-flex">
              <div class="col l8 margin-auto">
                <div class="row margin-bottom-none">
                  <div class="col m6 padding-right-48">
                    <div class="row margin-bottom-none">
                      <div class="col s12">
                        <h5 className="margin-bottom-2 font-size-16 font-weight-700 text-grey float-left">Subscribe</h5>
                      </div>
                      <div class="col s12">
                        <form class="DownloadSMSform subscribeForm">
                          <div class="width-100">
                            <ul class="list-inline customNewCheck padding-y-4 margin-none">
                              <li class="list-inline-item display-inline-block">
                                <input type="checkbox" id="OffersCheck" />
                                <label className="font-size-14 text-grey margin-bottom-8 display-inline-block" for="OffersCheck">Offers</label>
                              </li>
                              <li class="list-inline-item display-inline-block">
                                <input type="checkbox" id="BrandsCheck" />
                                <label className="font-size-14 text-grey margin-bottom-8 display-inline-block" for="BrandsCheck">Brands</label>
                              </li>
                              <li class="list-inline-item display-inline-block">
                                <input type="checkbox" id="allCheck" />
                                <label className="font-size-14 text-grey margin-bottom-8 display-inline-block" for="allCheck">All</label>
                              </li>
                            </ul>
                          </div>
                          <div class="formFild margin-top-6">
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="E-Mail"
                            />
                            <button class="form-button">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div class="col m6 padding-left-48">
                    <div class="row margin-bottom-none">
                      <div class="col-12 padding-left-8">
                        <h5 className="margin-bottom-2 font-size-16 font-weight-700 text-grey float-left">Download</h5>
                      </div>
                      <div class="col s12 width-100">
                        <ul class="list-inline padding-top-4 padding-bottom-8 margin-none DownloadAppNew">
                          <li class="list-inline-item display-inline-block">
                            <a href="#"></a>
                            <a href="#">
                              <img className="" src="images/apple-icon.png" alt="" />
                            </a>
                          </li>
                          <li class="list-inline-item display-inline-block">
                            <a href="#">
                              <img className="" src="images/pl.png" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col s12">
                        <form class="DownloadSMSform">
                          <div class="formFild margin-top-4">
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              placeholder="Download via SMS"
                            />
                            <button class="form-button">Submit</button>
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
