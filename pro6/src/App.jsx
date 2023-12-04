
import './App.css'
import {Fragment} from "react";
import {BrowserRouter} from "react-router-dom";
// import SiginUp from "./components/siginUp.jsx";
// import Login from "./components/login.jsx";
// import SiginUp from "./components/siginUp.jsx";
import Homepage from "./components/homepage.jsx";

function App() {


  return (
    <BrowserRouter>
        <Homepage/>
    </BrowserRouter>
  )
}

export default App
