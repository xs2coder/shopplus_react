// visa, amex, invoice, rupay
import React from "react";
const Footer5 = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer-arya border-top-ccc">
        <div className="row margin-bottom-none">
          <div className="container">
            <div className="row margin-bottom-none">
              <div className="col s12 text-align-right margin-top-0">
                <ul className="payment-logos display-inline-block">
                  <li className="visa">Visa</li>
                  <li className="mastercard">MasterCard</li>
                  <li className="american-express">American Express</li>
                  <li className="diners-club">Diners Club</li>
                  <li className="rupay">Rupay</li>
                  <li className="EMIOptions">EMI Options</li>
                  <li className="NetBanking">Net Banking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer5;
