import React, { useState } from 'react'
import boxD from "../../images/BoxDiagram1.jpg"
import "./International.css"                              /*Using same css*/

const dropdownItems = [
  {
    title: 'Economy Surface (By Road)',
    content: (
      <div>
        <p>Economy Domestic Courier & Cargo is a reliable, cost-effective service for those shipments that do not have any urgency. It offers reliable door-to-door delivery of goods to over 650 cities. This product is applicable only for cargo shipments. We have various tie-ups with courier companies to provide courier and cargo services to maximum destinations across India.</p>
        <ul>
          <li>Reliable delivery</li>
          <li>Time-to-time tracking updates for most destinations</li>
          <li>Delivery to metro, rural, and remote areas</li>
          <li>Volume-based discounts for contract customers</li>
          <li>Occasion & Seasonal Express Service available</li>
          <li>Minimum charge for 30 Kgs</li>
          <li>Help for individuals with packing and paperwork</li>
        </ul>
        <h3>Products</h3>
        <ul>
          <li>Non-Documents (Anything other than paper having value)</li>
          <li>CARGO (Commercial – Non-commercial)</li>
        </ul>
        <p><strong>Volumetric Weight:</strong></p>
        <p>Actual weight or volumetric weight, whichever is HIGHER, should be taken while calculating the rates. Formula for arriving at volumetric weight:</p>
        <p>1 Cubic Feet (CFT) = 10 Kg</p>
        <p>Vol. Wt = L x B x H (in cms) / 2700</p>
        <img src={boxD} alt="Packing Box" />
      </div>
    ),
  },
  {
    title: 'Occasion & Seasonal Express',
    content: (
      <div>
        <p><strong>DIWALI EXPRESS</strong>: Special Discounted Product for individuals to send gifts, foodstuff, and many more across the globe at discounted rates with time-effective delivery.</p>
        <p><strong>RAKHI</strong>: Special Discounted Product for individuals to send gifts and Rakhi across the globe at discounted rates with time-effective delivery.</p>
        <p><strong>MANGO</strong>: You can send mangoes to your loved ones using our product. It offers reliable door-to-door delivery of goods to over 52 countries within 5 to 6 business days for metropolitan areas of major cities.</p>
        <p><strong>VARIOUS OCCASIONS</strong>: Special Discounted Product for individuals to send gifts, foodstuff, and many more across the globe at discounted rates with time-effective delivery. This includes EID, NAVARATRI, CHRISTMAS, SANKRANTI, VALENTINE'S DAY, FRIENDSHIP DAY, DASARA, and many other small and local occasions.</p>
      </div>
    ),
  },
  {
    title: 'Domestic Excess Baggage',
    content: (
      <div>
        <p>Global-GI Express specializes in shipping excess baggage or luggage/unaccompanied baggage through its air & road services to any destination within India. Global-GI Express enables customers to ship all their excess baggage/luggage, ensuring an easy solution to bypass the strict airline rules on extra luggage. It even offers the option of sending unaccompanied luggage from Pune to any destination within India.</p>
        <p>There are limitations for every airline on baggage and on its check-in baggage in the aircraft. If you are traveling within India, then airline companies allow their passengers to carry only 23 kg as free allowance baggage. Anything in excess of this allowance is called excess baggage.</p>
        <p>Excess baggage can be very expensive for a person traveling on a long-term assignment or deputation. Global-GI EXPRESS has the capability of shipping these excess baggages at the most economical rate and even offers doorstep delivery at the destination after doing customer clearance of the destination country, provided the baggage does not contain any banned, contraband, illegal, or restricted items.</p>
      </div>
    ),
  },
  {
    title: 'Student Express',
    content: (
      <div>
        <p>You are studying day and night for admission into Delhi University, Pune University, IAM, and universities within India, navigating the cumbersome entry process into a new city as a student. Your primary concern is ensuring that all documents reach their required destination on time. Despite the multitude of services available, Global-GI University Shipments offers a specialized service of University Express for confirmed application delivery to anywhere in India.</p>
        <p>The hard work involved in preparing letters of recommendation, certificates, bank drafts, statement of purpose, and university applications goes in vain if they do not reach their destination well and on time. Global-GI University shipments provide an exclusive air express service designed to deliver student applications to universities abroad in a reliable, fast, and secure manner.</p>
        <h3>Value Added Service</h3>
        <ul>
          <li>Free Pickup</li>
          <li>Online tracking facility</li>
          <li>SMS alert on delivery of your shipment</li>
          <li>Packing materials available at Express Center</li>
          <li>Special rate on excess baggage for those who have sent their university application through us</li>
          <li>Free guidance for custom restrictions of destination country at the time of your excess baggage</li>
        </ul>
      </div>
    ),
  },
];
;



const Domestic = () => {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleDropdown = (index) => {
   setOpenIndex(openIndex === index ? null : index);
 };

 return (
   <div className="international-container">
     <h1>Domestic Courier and Cargo</h1>
     {dropdownItems.map((item, index) => (
       <div key={index} className="dropdown-item">
         <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
           {item.title}
         </button>
         {openIndex === index && (
           <div className="dropdown-content">
             {item.content}
           </div>
         )}
       </div>
     ))}
   </div>
 );
};

export default Domestic;