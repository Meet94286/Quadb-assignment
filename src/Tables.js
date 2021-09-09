import React from "react";
import { Table } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { IoTriangle } from "react-icons/io5";
import "./Table.css";
import table_img1 from "./Table-images/table-img1.png";
import table_img2 from "./Table-images/table-img2.png";
import table_img3 from "./Table-images/table-img3.png";
import table_img4 from "./Table-images/table-img4.png";
import table_img5 from "./Table-images/table-img5.png";

const Tables = () => {

 
  return (
  <div id="table-div">
    <div className="container-fluid mx-3 my-3"  >
      <Table responsive variant="light" id="out-div" >
        <thead className="text-muted">
          <tr className="my-2">
           
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
           <div style={{marginLeft:"-141px"}}>#</div>
         <th>Platform</th>
         <th>Last Traded Prize</th>
         <th>Buy/Sell Price</th>
         <th>Difference</th>
         <th>Savings</th>
         </div>
          </tr>
        </thead>  
        <tbody>
         
         
        <div className="out-row-div">
          <div  className="inner-div">
          <tr className="my-2" id="detail-div">
            <td  className="sr-div" >1</td>
            <td className="name-div">
              <a target="_blank" href="https://bit.ly/2BJxccc">
                <img src = {table_img1} className="logo-div"/>
              </a>
                <span className ="coin-name">WazirX</span></td>
                <td className="name-div" id="price">
             <BiRupee />
              40,14,405
            </td>
            <td className="name-div" id="buy-div" style={{display:"inline-flex",marginTop:"8px"}}  >
              <td><BiRupee /></td>
              40,06,524/
              <td><BiRupee /></td>
              40,15,456
            </td>
            <td className="name1-div">5.46%</td>
            <td className="name-div" id="savings-div">
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
            </div>
            </div>
   
   
         <div className="out-row-div">
           <div className="inner-div">
          <tr className="my-2" id="detail-div" >
            <td  className="sr-div">2</td>
            <td  className="name-div">
            <a target="_blank" href="https://bit.ly/2BJxccc">
              <img src = {table_img2} className="logo-div"/>
            </a>
           <span className ="coin-name"> Bitbns</span></td>
            <td  className="name-div" id="price">
              <BiRupee />
              40,14,405
            </td>

            <td className="name-div" id="buy-div" style={{display:"inline-flex",marginTop:"8px"}}  >
              <td><BiRupee /></td>
              40,06,524/
              <td><BiRupee /></td>
              40,15,456
            </td>

            <td  className="name1-div">5.46%</td>
            <td  className="name-div" id="savings-div">
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          </div>
          </div>

          <div className="out-row-div">
          <div  className="inner-div">
          <tr className="my-2"  id="detail-div">
            <td className="sr-div">3</td>
            <td  className="name-div">
            <a target="_blank" href="_">
              <img src = {table_img3} className="logo-div" />
            </a>
           <span className ="coin-name">Colodax</span></td>
            <td  className="name-div" id="price">
              <BiRupee />
              40,14,405
            </td>
            
            <td className="name-div" id="buy-div" style={{display:"inline-flex",marginTop:"8px"}}  >
              <td><BiRupee /></td>
              40,06,524/
              <td><BiRupee /></td>
              40,15,456
            </td>
            
            <td  className="name1-div">5.46%</td>
            <td  className="name-div" id="savings-div">
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          </div>
          </div>


          <div className="out-row-div">
          <div  className="inner-div">
          <tr className="my-2"  id="detail-div">
            <td className="sr-div">4</td>
            <td  className="name-div"><a target="_blank" href="_">
              <img src = {table_img4} className="logo-div" />
            </a>
           
            <span className ="coin-name"> Zebpay</span>
            </td>
            <td  className="name-div"id="price">
              <BiRupee />
              40,14,405
            </td>
            <td className="name-div" id="buy-div" style={{display:"inline-flex",marginTop:"8px"}}  >
              <td><BiRupee /></td>
              40,06,524/
              <td><BiRupee /></td>
              40,15,456
            </td>
            <td  className="name1-div">5.46%</td>
            <td  className="name-div" id="savings-div">
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          </div>
          </div>

          
          <div style={{width:"100% ",marginTop:"1%"}}>
          <div style={{display:"flex",height:"70px"}}>
          <tr className="my-5" id="detail-div">
            <td id="last-div" style={{marginLeft:"15px"}}>5</td>
            <td className="name-div" id="last-div" style={{marginLeft:"8.5rem"}}>
              <a target="_blank" href="_">
              <img src = {table_img5} className="logo-div" />
            </a>
           <span className ="coin-name">CoinDCX</span></td>
            <td className="name-div" id="last-div" style={{marginLeft:"90px"}}>
              <BiRupee />
              40,14,405
            </td>
            <td className="name-div"  id="last-div" style={{display:"inline-flex",marginTop:"-40 px",marginLeft:"80px"}}  >
              <td><BiRupee /></td>
              40,06,524/
              <td><BiRupee /></td>
              40,15,456
            </td>
            <td className="name1-div" id="last-div" style={{marginLeft:"10rem"}}>5.46%</td>
            <td className="name-div" id="last-div" style={{marginLeft:'130px'}}>
              <IoTriangle />
              <BiRupee />
              2,22,330
            </td>
          </tr>
          </div>
          </div>
        </tbody>

      </Table>
   </div>
  </div>
  );
};

export default Tables;
