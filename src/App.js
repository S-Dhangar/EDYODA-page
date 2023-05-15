import { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar.js";

import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
function App() {
let [price,setprice]= useState(99);
const change=(e)=>{
  setprice(e);
}
  return (
    <div>
<Navbar/>
    <div className="Content">
      <div>
      <Container1 price={price} />
      </div>
      <div>
      <Container2 change={change} price={price+50}/>
      </div>
     
    </div>
    </div>
  );
}

export default App;
