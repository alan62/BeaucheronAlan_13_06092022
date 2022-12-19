import React from 'react';
import "./account.css";

/**
 * user Account
 * @param {Object} amount
 * @returns {ReactElement}
 */
 const Account = ({ amount }) => {
    return (
      <div className="accountContainer">
        <div className="account__content__wrapper">
          <h3 className="account__title">Argent Bank Checking (x8349)</h3>
          <p className="account__amount">{amount}</p>
          <p className="account__amount__description">balance or current</p>
        </div>
        <div className="account__content__wrapper cta">
          <button className="transaction__button">View transactions</button>
        </div>
      </div>
    )
  }
  
  export default Account