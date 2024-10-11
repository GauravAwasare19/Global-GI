import React from 'react';
import './conversion.css'; // Ensure to create this CSS file for styling

const Conversion = () => {
  return (
    <div className='conversion-container'>
      <h1>Conversion Factors</h1>
      <p>
        Conversion factors are essential tools that enable accurate and efficient transformation of measurements from one unit to another. They are particularly helpful for clients and businesses that operate across different regions or industries where varying measurement systems are prevalent. By providing a clear and standardized method for converting units—such as length, area, volume, and weight—conversion factors facilitate better communication and understanding among stakeholders. This ensures that specifications, pricing, and product dimensions are uniformly interpreted, minimizing errors and enhancing operational efficiency. Whether for shipping logistics, construction projects, or scientific research, having access to reliable conversion factors supports informed decision-making and promotes consistency in various applications.
      </p>
      <div className='conversion-row'>
        <div className='conversion-section'>
          <h2>Length</h2>
          <table>
            <thead>
              <tr>
                <th>Conversion</th>
                <th>Multiply by</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Inches to Centimetres</td><td>2.54</td></tr>
              <tr><td>Centimetres to Inches</td><td>0.39</td></tr>
              <tr><td>Inches to Millimetres</td><td>25.40</td></tr>
              <tr><td>Millimetres to Inches</td><td>0.04</td></tr>
              <tr><td>Feet to Metres</td><td>0.31</td></tr>
              <tr><td>Metres to Feet</td><td>3.28</td></tr>
              <tr><td>Yards to Metres</td><td>0.91</td></tr>
              <tr><td>Metres to Yards</td><td>1.09</td></tr>
              <tr><td>Miles to Kilometres</td><td>1.61</td></tr>
              <tr><td>Kilometres to Miles</td><td>0.62</td></tr>
            </tbody>
          </table>
        </div>

        <div className='conversion-section'>
          <h2>Area</h2>
          <table>
            <thead>
              <tr>
                <th>Conversion</th>
                <th>Multiply by</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Square Inches to Square Centimetres</td><td>6.451</td></tr>
              <tr><td>Square Centimetres to Square Inches</td><td>0.15</td></tr>
              <tr><td>Square Feet to Square Metres</td><td>0.09</td></tr>
              <tr><td>Square Metres to Square Feet</td><td>10.76</td></tr>
              <tr><td>Square Yards to Square Metres</td><td>0.84</td></tr>
              <tr><td>Square Metres to Square Yards</td><td>1.20</td></tr>
              <tr><td>Square Miles to Square Kilometres</td><td>2.59</td></tr>
              <tr><td>Square Kilometres to Square Miles</td><td>0.39</td></tr>
              <tr><td>Acres to Hectares</td><td>0.40</td></tr>
              <tr><td>Hectares to Acres</td><td>2.47</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='conversion-row'>
        <div className='conversion-section'>
          <h2>Volume</h2>
          <table>
            <thead>
              <tr>
                <th>Conversion</th>
                <th>Multiply by</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Cubic Inches to Cubic Centimetres</td><td>16.39</td></tr>
              <tr><td>Cubic Centimetres to Cubic Inches</td><td>0.06</td></tr>
              <tr><td>Cubic Feet to Cubic Metres</td><td>0.03</td></tr>
              <tr><td>Cubic Metres to Cubic Feet</td><td>35.32</td></tr>
              <tr><td>Cubic Yards to Cubic Metres</td><td>0.76</td></tr>
              <tr><td>Cubic Metres to Cubic Yards</td><td>1.31</td></tr>
              <tr><td>Cubic Inches to Litres</td><td>0.02</td></tr>
              <tr><td>Litres to Cubic Inches</td><td>61.03</td></tr>
              <tr><td>Gallons to Litres</td><td>4.55</td></tr>
              <tr><td>Litres to Gallons</td><td>0.22</td></tr>
              <tr><td>US Gallons to Litres</td><td>3.79</td></tr>
              <tr><td>Litres to US Gallons</td><td>0.26</td></tr>
              <tr><td>Fluid Ounces to Cubic Millilitres</td><td>30.77</td></tr>
              <tr><td>Cubic Millilitres to Fluid Ounces</td><td>0.03</td></tr>
            </tbody>
          </table>
        </div>

        <div className='conversion-section'>
          <h2>Weight</h2>
          <table>
            <thead>
              <tr>
                <th>Conversion</th>
                <th>Multiply by</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ounces to Grams</td><td>28.35</td></tr>
              <tr><td>Grams to Ounces</td><td>0.04</td></tr>
              <tr><td>Pounds to Kilograms</td><td>0.45</td></tr>
              <tr><td>Kilograms to Pounds</td><td>2.21</td></tr>
              <tr><td>Long Tons to Tonnes</td><td>1.02</td></tr>
              <tr><td>Tonnes to Long Tons</td><td>0.98</td></tr>
              <tr><td>Short Tons to Tonnes</td><td>0.91</td></tr>
              <tr><td>Tonnes to Short Tons</td><td>1.10</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
