import React from 'react'
import FlipCountdown from "@rumess/react-flip-countdown";
const CoutDown = () => {
  return (
    <div className='mt-4'>
         <h2 className="text-black cursor-pointer text-4xl font-bold  hover:text-blue-500 text-center">Time Limit: Grab your own seat</h2>
 <FlipCountdown
        size='medium'
        theme='light'
        titlePosition='bottom'
        hideYear
        monthTitle="Months"
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAt={'2023-12-31 01:26:58'}
        className="text-white"
      />
        
    </div>
  )
}

export default CoutDown