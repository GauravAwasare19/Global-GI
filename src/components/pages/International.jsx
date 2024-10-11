  import React, { useState } from 'react'
 import boxD from "../../images/BoxDiagram1.jpg"
 import "./International.css"

 const dropdownItems = [
  {
    title: 'International Express Service',
    content: (
      <div>
        <p>Global-GI commits its expertise in international air express service for courier and cargo. We manage to give you air Express Service to more than 225 countries and territories. We offer customer superior service, quality, and local knowledge to satisfy their Express Courier & Cargo requirements. Global-GI accepts its social responsibility by supporting climate protection, disaster management & education. We have tie-ups with various International couriers MNCs to provide service for maximum destinations across the globe.</p>
        <p><strong>INTERNATIONAL EXPRESS SERVICE (Fast Service)</strong></p>
        <p>Express Courier International is a reliable, time-effective, international courier service. It offers reliable door-to-door delivery of documents and goods to over 225 countries within 2 to 4 business days for metropolitan areas of major cities.</p>
        <ul>
          <li>International courier pickup and reliable delivery</li>
          <li>Time-to-time tracking updates for most destinations</li>
          <li>Access to the world's largest delivery networks</li>
          <li>Various types of packing available.</li>
          <li>Delivery to Post Office boxes, metro, rural, and remote areas</li>
          <li>Volume-based discounts for contract customers</li>
        </ul>
        <p><strong>Express Products</strong></p>
        <ul>
          <li>Documents (only paper)</li>
          <li>Non-documents (anything other than paper having value)</li>
          <li>Cargo (commercial – non-commercial)</li>
          <li>University applications shipments</li>
          <li>Excess baggage express</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'International Economy (Slow Service)',
    content: (
      <div>
        <p>Economy International Courier & Cargo is a reliable, cost-effective service for those shipments that do not have any urgency. It offers reliable door-to-door delivery of documents and goods to over 90 countries.</p>
        <p><strong>International courier reliable delivery</strong></p>
        <ul>
          <li>Online tracking available</li>
          <li>Economy service is not applicable across the globe.</li>
          <li>No Delivery to Post Office boxes, metro, rural, and remote areas</li>
        </ul>
        <p><strong>Economy Products</strong></p>
        <ul>
          <li>Documents (only paper)</li>
          <li>Non-documents (anything other than paper having value)</li>
          <li>Cargo (commercial – non-commercial)</li>
          <li>Excess baggage express</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Import Express',
    content: (
      <div>
        <p>Import Express offers reliable door-to-door delivery of goods to over 126 countries within 5 to 6 business days for metropolitan areas of major cities. We have tie-ups with various International couriers MNCs to provide Import Express service from maximum origins across the globe. Individuals can also import from across the globe.</p>
        <p><strong>Import Express Products</strong></p>
        <ul>
          <li>Documents (only paper)</li>
          <li>Non-documents (anything other than paper having value)</li>
          <li>Cargo (commercial – non-commercial)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Occasion & Seasonal Express',
    content: (
      <div>
        <p><strong>DIWALI EXPRESS</strong>: Special Discounted Product for individuals to send gifts, foodstuff, and many more across the globe on discounted rates with time-effective delivery.</p>
        <p><strong>RAKHI</strong>: Special Discounted Product for individuals to send gifts and Rakhi across the globe on discounted rates with time-effective delivery.</p>
        <p><strong>MANGO</strong>: You can send mangos to your loved ones using our product. It offers reliable door-to-door delivery of goods to over 52 countries within 5 to 6 business days for metropolitan areas of major cities.</p>
        <p><strong>VARIOUS OCCASIONS</strong>: Special Discounted Product for individuals to send gifts, foodstuff, and many more across the globe on discounted rates with time-effective delivery. This includes EID, NAVARATRI, CHRISTMAS, SANKRANTI, VALENTINE DAY, FRIENDSHIP DAY, DASARA, and many other small and local occasions.</p>
      </div>
    ),
  },
  {
    title: 'Global-GI International Forwarding',
    content: (
      <div>
        <p>Global-GI has various business associates for International forwarding needs. With the help of our associates, we are glad to offer the following services for our customers:</p>
        <ul>
          <li>Shipping Agents</li>
          <li>Freight Forwarders & Consolidators (Sea / Air / Courier)</li>
          <li>Custom Clearing Agents</li>
          <li>Consultants (International Trade & Global Logistics)</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'University Application Shipment',
    content: (
      <div>
        <p>You are studying day and night for admission into Oxford, Harvard, Stanford Universities or similar foreign universities, and in between, you are going through a cumbersome entry process into the new country as a student at a college or university. Your basic concern is that all documents reach on time to their required destination. Global-GI University Shipments brings a specialized service of University Express for confirmed application delivery to anywhere in the world.</p>
        <p><strong>EASIEST WAY TO APPLYING TO UNIVERSITIES ABROAD</strong></p>
        <p><strong>Value Added Services</strong></p>
        <ul>
          <li>Free Pick up</li>
          <li>Online tracking facility</li>
          <li>SMS alert on delivery of your shipment</li>
          <li>Packing Materials Available at Express Center</li>
        </ul>
        <p><strong>Once you get Admit</strong></p>
        <ul>
          <li>Special Rate on Excess Baggage for those who have sent their university application through us.</li>
          <li>Free Guidance for custom restrictions of Destination Country at the time of your excess baggage.</li>
          <li>Refer a pal and get assured gift or come in a group and get more discount.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'International Excess Baggage',
    content: (
      <div>
        <p>Global-GI Express specializes in shipping excess baggage or luggage/ unaccompanied baggage through its air & sea services to any destination worldwide. Global-GI Express enables customers to ship all their excess baggage/luggage thus ensuring an easy solution to bypass the strict airline rules on extra luggage. It even offers the option of sending unaccompanied luggage from Pune to any destination worldwide.</p>
        <p>There are limitations for every airline on baggage and its check-in baggage in the aircraft. Airlines traveling from India to Europe, the Middle East, Far East, and Asian countries allow their passengers to carry only 23kgs as free allowance baggage. Passengers traveling across the Atlantic Ocean are only allowed to carry 2 pieces of baggage with a maximum weight of 64kgs as free allowance. Anything in excess of the above allowances is called Excess Baggage.</p>
        <p>Excess Baggage is a very expensive affair for a person traveling on a long-term assignment or deputation. INDOFINE EXPRESS has the capability of shipping these excess baggages at the most economical rate and even offers doorstep delivery at the destination after doing customer clearance of the destination country, provided the baggage does not contain any banned, contraband, illegal, or restricted items.</p>
        <p><strong>Volumetric Weight:</strong></p>
        <p>Actual weight or Volumetric weight, whichever is HIGHER, should be taken while calculating the rates. Formula for arriving at Volumetric Weight:</p>
        <img src={boxD} alt="Volumetric Weight Formula" />
      </div>
    ),
  },
];



const International = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="international-container">
      <h1>International Courier and Cargo</h1>
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

export default International;