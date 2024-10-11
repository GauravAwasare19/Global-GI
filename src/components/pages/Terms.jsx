
import logo from "../../images/Logo2.png"
import React from 'react';
import './Terms.css'; 

const Terms = () => {
  return (
    <>
      <div className="terms-container">
        <h1>Terms and Conditions of Carriage</h1>
        <div className="terms-content">
          <div className="terms-column">
            <p>
              Global GateWay International Terms and Conditions of Carriage ("Terms and Conditions").
            </p>
            <p>
              Global-GI may perform any Shipper be the following old services to Shipper: (1) complete any documents, amend product or service codes, and pay any duties or taxes required under applicable laws and regulations, (2) act as Shipper's forwarding agent for customs and export control purposes and as Receiver solely for the purpose of the Shipment to Receiver's import broker or other address upon request by any person who Global-GI believes in its reasonable opinion is authorized for customs clearance and entry and may redirect.
            </p>
            <p>
              Shipper agrees that Shipment is acceptable for transportation and is deemed unacceptable if classified as hazardous dangerous goods, prohibited by IATA (International Air Transport Association), ICAO (International Civil Aviation Organization), any applicable government department or other relevant organization, or no customs declaration is made when required by applicable customs regulations.
            </p>
            <p>
              Global-GI agrees that its Shipment is acceptable for transportation and is made unacceptable if it decides it cannot transport an item safely or legally. Such items include but are not limited to animals, bullion, currency, bearer form negotiable instruments, precious metals and stones, firearms, parts thereof and ammunition, human remains, pornography, and illegal narcotics/drugs.
            </p>
            <p>
              <strong>IMPORTANT NOTICE:</strong> When ordering Global-GI. services, you, as "Shipper", agree on your behalf and on behalf of anyone with an interest in the Shipment that the Terms and Conditions shall apply from the time that Global-GI accepts the Shipment unless otherwise agreed in writing by an authorized officer of Global-GI. Your statutory rights and entitlements under any defined services feature (for which additional payment has been made) are not affected.
            </p>
          </div>

          <div className="terms-logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="terms-column">
            <p>
              Shipments to Receiver will be delivered to PO boxes or postal codes. Shipments are delivered to the address given by Shipper (in which case mail services shall be deemed to be the first receiving postal service but not necessarily to the named Receiver personally). Shipments to addresses with a central receiving area will be delivered to that area. If Receiver refuses delivery or fails to pay for delivery, or the Shipment is deemed unacceptable, has been undervalued for customs purposes, or Receiver cannot be identified or located, Global-GI shall make reasonable efforts to return the Shipment to Shipper at Shipper's cost, failing which the Shipment may be returned, released, disposed of, or sold by Global-GI without incurring any liability whatsoever to Shipper or anyone else, with the proceeds applied against service charges and related administrative costs, the balance of the proceeds of a sale to be returned to Shipper.
            </p>
            <p>
              Global-GI. has the right to open and inspect a Shipment without notice to Shipper.
            </p>
            <p>
              Global-GI. Shipment charges are calculated according to the higher of actual or volumetric weight, and any Shipment may be re-weighed and re-measured by Global-GI to confirm the calculation. Shipper shall pay or reimburse Global-GI for all Shipment charges, storage charges, duties, and taxes owed for services provided by Global-GI or incurred by Global-GI on Shipper's, Receiver's, or any third party's behalf and all claims, damages, fines, and expenses incurred if the Shipment is deemed unacceptable for transport as described in Section 2.
            </p>
            <p>
              "Shipment" means all documents or parcels that travel under one waybill and which may be carried by any means Global-GI. chooses, including air, road, or any other carrier. A "waybill" shall include any label produced by Global-GI's automated systems, air waybill, or consignment note and shall incorporate these Terms and Conditions.
            </p>
            <p>
              GLOBAL GATEWAY INTERNATIONAL  contacts  with Shipper on the basis that Global-GI. liability is strictly limited to direct loss only and to the per kilogram limits in this Section 6.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;

