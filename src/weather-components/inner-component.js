import React from "react"
import Display_Weather from "./Display_component"
import Input_Data from "./input_component"



const Inner_Body = (props) => {

    return(
        <>
          <div className="Main_inner">
            <div className="Weather_box1">
                <Display_Weather/>
            </div>
            <div className="Weather_box2">
           <Input_Data/>
            </div>
          </div>
         
        </>
    )


}

export default Inner_Body 