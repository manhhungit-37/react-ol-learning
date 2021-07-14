import { useState, useEffect } from 'react'

function UseCheckSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    checkSreen();
    window.addEventListener('resize', checkSreen);
    return () => {
      window.removeEventListener('resize', checkSreen)
    }
  }, [])

  function checkSreen() {
    setIsSmallScreen(window.innerWidth < 768)
  }

  return isSmallScreen
}

export default UseCheckSize
