import React from 'react'

function ConditionalRenderingUpdate() {
  const time = new Date();
  const day=time.toLocaleString('en-us',{weekday:'long'});
  const morning=time.getHours()>= 6 && time.getHours()<=12 ;
  let dayMessage;
 if (day.toLowerCase() ==='monday'){
  dayMessage=`happy ${day}`
 } else if(day.toLowerCase()  ==='tuesday'){
  dayMessage=`${day}, four days to go`
 } 
 else if(day.toLowerCase() ==='wednesday'){
  dayMessage=`${day}, half way there`
 }
 else if(day.toLowerCase() ==='thursday'){
  dayMessage=`${day}, start planning the weekend`
 }
 else if(day.toLowerCase() ==='friday'){
  dayMessage=`woo-hoo weekend is coming `
 } else{
  dayMessage='stay calm and keep having fun'
 }
  return (
    <div>
      <h1>{dayMessage}</h1>
      {morning?<h2>have you had breakfast yet</h2>:''}
    </div>
  )
}

export default ConditionalRenderingUpdate