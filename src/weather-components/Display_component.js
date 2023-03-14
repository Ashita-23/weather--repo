import React from "react"

let setNDT = new Date()
 
let days = ["Sunday" , "Monday" , "Tuesday" ," Wednusday" , "Thursday" , "Friday" , "Saturday"] ;

let setDay = setNDT.getDay()
// console.log(setDay)


let setFullTime = setNDT.toLocaleTimeString()
let setFullDate = setNDT.toLocaleDateString()




const Display_Weather = () => {
return(
    <>
    {/* display statu and contury name  */}
  <div className="dis_names">
    <span>faridabad</span>
    <span>IND</span>
  </div>
  {/* display time date day and temprature  */}
  <div className="temp_outer">
    <div className="dis_time">
    
    <p>{setFullTime}</p>
    <span>{days[setDay]}{" "}<span>{setFullDate}</span></span>

    </div>
    <div className="dis_temp">temprature</div>
  </div>
    </>
)
}

export default Display_Weather 