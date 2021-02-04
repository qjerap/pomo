import React, { useState } from "react";
import Clock from "./timer";

const Timer = () => {
  return(
  <div>
    <Clock initialMinute={25} initialSeconds={50}/>
  </div>)
};

export default Timer;
