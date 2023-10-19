import React from "react";
import "./Fee.css";
import { Link } from "react-router-dom";
import Scholarship from "../Scholarship/Scholarship";

function Fee() {
  return (
    <>
      <section>
        <h1>FEE Structure</h1>
        <div className="table">
          <h2>Engineering Division</h2>
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
        <div>
          <h2>Medical Deivison</h2>
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
        <div>
          <h2>Foundation Division</h2>
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
