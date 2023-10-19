import "./App.css";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header'

function App() {

  return  (
    <div className="head">
      <div className="header">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  ) 
}

export default App;