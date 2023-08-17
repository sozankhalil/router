import React from 'react'
import Workdays from './Workdays';
import Weekdays from './Weekdays';


function ConditionalRendering() {
    const day =new Date().getDay();
  return (
    <div>{
        day>=1 && day<=5? <Workdays/>: <Weekdays/>
        }

    </div>
  )
}

export default ConditionalRendering