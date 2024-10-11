import React from 'react';
import './prohibited.css'; // Create this CSS file to style the content

const Prohibited = () => {
  return (
    <div className="prohibited-container">
      <h1>Prohibited Items</h1>
      <ul className="prohibited-list">
        <li>Stamped and prepaid postal envelopes and parcels</li>
        <li>Precious stones, gems and jewelry</li>
        <li>Uncrossed (bearer) drafts / cheque, currency and coins</li>
        <li>Poison</li>
        <li>Firearms, explosives and military equipment</li>
        <li>Hazardous substance and radioactive material</li>
        <li>Foodstuff and liquor</li>
        <li>Pornographic material</li>
        <li>All items that infringe the Indian Postal Act Of 1898</li>
        <li>All restricted items as per the guidelines of IATA</li>
      </ul>
    </div>
  );
}

export default Prohibited;
