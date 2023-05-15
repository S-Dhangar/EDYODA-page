import React from 'react'
import "./container2.css"
const Container2 = (props) => {
    let firstprice= 99;
    let secondprice= 179;
    let thirdprice= 149;
    let total = 18500-props.price;
    return (
        <div className='body'>

            <div className="form">

                <h4 style={{color:"#3C4852",
fontStyle: "normal",fontSize:"17px",marginBottom:"40px",
fontWeight: "600"}}>Select Your Subscription plan</h4>
                <div className="one">
                <label className="form-check-label">

                    <div className="two">
                        
                            <div className="form-check">
                            <input className="form-check-input" onClick={()=>{props.change(firstprice)}} type="radio" name="flexRadioDefault" />

                                12 months subscription 
                                <div className="rightcontainer" style={{fontWeight:"normal"}}>
                                    <div className="topcontainer">Total <h8>{firstprice}</h8></div>
                                    <div className="bottomcontainer">₹8/month</div>
                                </div>
                               
                        </div>
                    </div>
                    </label>

                    <label className="form-check-label">

                    <div className="two" style={{border:"2px solid #47BA68",height:"30px"}}>
                        
                            <div className="form-check">
                                <p style={{fontSize:"10px",backgroundColor:"green",marginTop:"-8px"}}>Recommended</p>
                            <input  className="form-check-input"  type="radio" onClick={()=>{props.change(secondprice)}} name="flexRadioDefault"/>

                                12 months subscription 
                                <div className="rightcontainer" style={{fontWeight:"normal",marginTop:"-8px"}}>
                                    <div className="topcontainer">Total <h8>{secondprice}</h8></div>
                                    <div className="bottomcontainer">₹15/mo</div>
                                </div>
                               
                        </div>
                    </div>
                    </label>
<label className="form-check-label" >

<div className="two">
    
        <div className="form-check">
        <input className="form-check-input" type="radio" onClick={()=>{props.change(thirdprice)}} name="flexRadioDefault" />

            6 months subscription 
            <div className="rightcontainer" style={{fontWeight:"normal"}}>
                <div className="topcontainer">Total <h8>{thirdprice}</h8></div>
                <div className="bottomcontainer">₹25/mo</div>
            </div>
           
    </div>
</div>
</label>
<label className="form-check-label" >

                    <div className="two">
                        
                            <div className="form-check">
                            <input className="form-check-input" type="radio" onClick={()=>{props.change(firstprice)}} name="flexRadioDefault"/>

                                3 months subscription 
                                <div className="rightcontainer" style={{fontWeight:"normal"}}>
                                    <div className="topcontainer">Total <h8>{firstprice}</h8></div>
                                    <div className="bottomcontainer">₹33/month</div>
                                </div>
                               
                        </div>
                    </div>
                    </label>
                    <hr className="hr-line" />
                    <div className="pricetext">
    <div className="c1">Subscription Fee</div>
    <div className="c2">₹18,500</div>
</div>
<label htmlFor="">
<div className="three">
<div className="pricetext">
    <div className="c3">Limited Time Offer</div>
    <div className="c4">-₹{total}</div> 
    <p className="offer-text">Offer valid till 25th May 2023</p>

</div> 

</div>

</label>
<div className="pricetext" style={{marginLeft:"70px"}}>
    <div style={{marginRight:"100px",fontSize:"10px",fontWeight:"bold"}}>Total (incl. of 18% GST)</div>
    <div style={{marginRight:"100px",fontSize:"13px",fontWeight:"bold"}}>₹{props.price}</div>

</div> 
<div className="buttons">
    <button style={{textTransform: "uppercase",fontSize:"10px",fontWeight:"bold",height:"40px",cursor:"pointer",width:"170px",marginRight:"20px"}}>Cancel</button>
    <button style={{backgroundColor:"#47BA68",fontSize:"10px",height:"40px",fontWeight:"bold",cursor:"pointer",border:"none",width:"170px",borderRadius: "4px",justifyContent: "center",alignItems: "center",textTransform: "uppercase"}}>Proceed</button>
</div>
                </div>

            </div>
         </div>
    )
}

export default Container2