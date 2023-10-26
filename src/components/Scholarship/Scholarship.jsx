import React from 'react'
import { Link } from "react-router-dom";
import './Scholarship.css'

function Scholarship() {
  return (
    <section className='section'>
        <h1>Scholarship Criteria</h1>
        <div className="table">
          <h2>i) Based on 10-12 boards percentage</h2>
          <table>
            <thead>
              <tr>
                <th>PERCENTAGE</th>
                <th>TOTAL FEE</th>
                <th>SCHOLARSHIP</th>
                <th>FINAL FEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>97% & ABOVE</td>
                <td>98,000</td>
                <td>73,000</td>
                <td>25,000</td>
              </tr>
              <tr>
                <td>96%-97%</td>
                <td>98,000</td>
                <td>58,000</td>
                <td>40,000</td>
              </tr>
              <tr>
                <td>95%-96%</td>
                <td>98,000</td>
                <td>48,000</td>
                <td>50,000</td>
              </tr>
              <tr>
                <td>94%-95%</td>
                <td>98,000</td>
                <td>38,000</td>
                <td>60,000</td>
              </tr>
              <tr>
                <td>92%-94%</td>
                <td>98,000</td>
                <td>33,000</td>
                <td>65,000</td>
              </tr>
              <tr>
                <td>90%-92%</td>
                <td>98,000</td>
                <td>28,000</td>
                <td>70,000</td>
              </tr>
              <tr>
                <td>85%-90%</td>
                <td>98,000</td>
                <td>23,000</td>
                <td>75,000</td>
              </tr>
              <tr>
                <td>80%-85%</td>
                <td>98,000</td>
                <td>18,000</td>
                <td>80,000</td>
              </tr>
              <tr>
                <td>75%-80%</td>
                <td>98,000</td>
                <td>16,000</td>
                <td>82,000</td>
              </tr>
              <tr>
                <td>70%-75%</td>
                <td>98,000</td>
                <td>13,000</td>
                <td>85,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='table'>
          <h2>ii) Based on JEE Main Percentile</h2>
          <table>
            <thead>
              <tr>
                <th>JEE Main %tile</th>
                <th>REBATE IN FEE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>97-100</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>96.5-97</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>96-96.5</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>95-96</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>94-95</td>
                <td>55%</td>
              </tr>
              <tr>
                <td>93-94</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>92-93</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>90-92</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>85-90</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>80-85</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  )
}

export default Scholarship
