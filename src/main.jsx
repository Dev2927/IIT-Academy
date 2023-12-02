import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/AboutCourse/About.jsx";
import Fee from "./components/Fee-Scholarship/Fee.jsx";
import Benefits from "./components/Course-Benefits/Benefits.jsx";
import WhyIIT from "./components/WhyIIT/WhyIIT.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Resources from "./components/Resources/Resources.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/iit",
        element: <WhyIIT />,
      },
      {
        path: "/fee",
        element: <Fee />,
      },
      {
        path: "/coursebenefits",
        element: <Benefits />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
