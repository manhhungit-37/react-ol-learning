import React from 'react'

import useScreenWidth from '../hooks/useScreenWidth';

function UseCheckSize() {
  const isSmalScreen = useScreenWidth();

  return (
    <div style={{
      width: 300,
      heigh: 300,
      backgroundColor: isSmalScreen ? '#f00' : '#ff0'
    }}>
      demo custom hook
    </div>
  )
}

export default UseCheckSize
