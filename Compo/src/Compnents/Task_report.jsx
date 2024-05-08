import React from "react";
import "./Task_report.css";
import data from './data.json';


const Task_report=()=>
{

    return(
        <div className="back">
        
        <div className="boxassign">
        {
            data.map((data,i)=>(
                <div className="some" key={i}>
                <p>Assingnedby:{data.Assingnedby}</p>
                </div>
            ))
        }
        </div>
        
        <div className="boxtask">
        </div>
        <div className="boxdesc">
        </div>
        <div className="boxdate">
        </div>
        <div className="boxstatus">
        </div>
        
        </div>
    );

}
export default Task_report;