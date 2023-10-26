import React from "react";
import "./Fee.css";
import { Link } from "react-router-dom";
import Scholarship from "../Scholarship/Scholarship";

function Fee() {
  return (
    <>
      <section className="fee-section">
        <h1>FEE Structure</h1>
        <div className="fee-table">
          <h2>i) Engineering Division</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Eligibility</th>
                <th>FEE Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fee-table">
          <h2>ii) Medical Deivison</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Eligibility</th>
                <th>FEE Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fee-table">
          <h2>iii) Foundation Division</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Eligibility</th>
                <th>FEE Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Link to="/" className="view">
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Scholarship />
      </section>
    </>
  );
}

export default Fee;
