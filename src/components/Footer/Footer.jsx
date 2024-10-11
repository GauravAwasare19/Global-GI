import React from 'react';
import { Link } from 'react-router-dom'; 
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">
            <Link to="/international-courier">International Courier and Cargo</Link>
          </li>
          <li className="fListItem">
            <Link to="/domestic-courier">Domestic Courier and Cargo</Link>
          </li>
          <li className="fListItem">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="fListItem">
            <Link to="/termsconditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="fText">© 2024 Global-GI Pune. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
