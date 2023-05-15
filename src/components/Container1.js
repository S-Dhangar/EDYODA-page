import "./Container1.css";
import vector2 from "./images/Vector (2).png";
import vector3 from "./images/Vector (3).png";
import vector4 from "./images/Vector (4).png";
import vector5 from "./images/Vector (5).png";
import vector6 from "./images/ADS.png";

const Container1 = (props) => {
  let price = props.price;

  return (
    <div className="mainpage">
      <div className="header">
        <div className="frame1">
          <p className="text">Access curated courses worth</p>
        </div>
        <div className="frame2">
          <p className="text">
            ₹ <span className="special" style={{fontFamily: 'Raleway'}}>&nbsp;18,500</span>&nbsp;at just&nbsp;<h5 style={{color:"#0096FF"}}>₹&nbsp;{price}</h5>&nbsp;per year!
          </p>
        </div>
      </div>

      <div className="pointer">
        <p className="text2"> <img src={vector2} alt="" style={{height:"25px",marginRight:"20px"}} />  <h5 style={{color:"#0096FF"}}> 100+</h5> &nbsp; job relevant courses</p>
      </div>
      <div className="pointer">
        <p className="text2"><img src={vector3} alt="" style={{height:"25px",marginRight:"20px"}} /><h5 style={{color:"#0096FF"}}> 20,000+</h5>&nbsp; Hours of Content</p>
      </div>
      <div className="pointer">
        <p className="text2"><img src={vector4} alt="" style={{height:"25px",marginRight:"20px"}} />Exclusive webinar access</p>
      </div>
      <div className="pointer">
        <p className="text2"><img src={vector5} alt="" style={{height:"25px",width:"20px",marginRight:"20px"}} />Scholarship worth &nbsp;<h5 style={{color:"#0096FF"}}> 94,000</h5></p>
      </div>
      <div className="pointer">
        <p className="text2"><img src={vector6} alt="" style={{height:"20px",width:"25px",marginRight:"20px"}} />Ad Free learning experience</p>
      </div>
    </div>
  );
};

export default Container1;
