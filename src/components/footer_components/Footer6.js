// powered by egyftr
import React from "react";
const Footer6 = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footerLast margin-top-0">
        <div className="row margin-bottom-none">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col s12 m8 text-align-left">
                © 2016. Vouchagram India Pvt. Ltd{" "}
                <span className="padding-x-8">|</span>{" "}
                <a href="#">Privacy Policy</a>
                <span className="padding-x-8">|</span>
                <a href="#">Terms of Use</a>{" "}
              </div>
              <div className="col s12 m4 text-align-right padding-top-0">
                <div className="display-inline-block text-align-right">
                  <span className="display-inline-block margin-top-8 margin-right-8">
                    Powered by
                  </span>
                  <a
                    href="https://www.gyftr.com/"
                    target="_blank"
                    className="float-right"
                  >
                    <img src="images/footer-logo.png" alt="GyFtr" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer6;
