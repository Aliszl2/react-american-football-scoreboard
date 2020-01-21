import React,{useState, useEffect} from "react";
import "./App.css";


const BottomRow = () => {

  const[quarter,setQuarter]=useState(0);
  const[toGo,setToGo]=useState(10);
  const[down,setDown]=useState(0);
  const[ballOn,setBallOn]=useState(0);

  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
  <div className="down__value"
   onClick={()=>{
     if(toGo >0){
       setToGo(toGo-1);
       setDown(down+1);
     }else{setToGo(10);
      setDown(0);}
  }}
  >{down}
  </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value"
          onClick={()=>{
            if(toGo >0){
              setToGo(toGo-1);
              setDown(down+1);
            }else{setToGo(10);
             setDown(0);}
          }}
        >{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value"
        onClick={()=>{
          if(ballOn < 100 ){
            setBallOn(ballOn + 1)
          }else{setBallOn(0)}
        }}
        >{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value"
         onClick={()=>{
           if(quarter <4){
             setQuarter(quarter+1)
           }else{
             setQuarter(0)
           }
         }}
         >{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
