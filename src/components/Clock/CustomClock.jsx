import React from 'react';
import useClock from '../../hooks/useClock';

function CustomClock() {
  const { timeString } = useClock(); 
  return (
    <div>{timeString}</div>
  )
}

CustomClock.propTypes = {

}

export default CustomClock

