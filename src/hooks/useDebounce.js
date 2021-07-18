import { useState, useEffect } from 'react'

const useDebounce = (text = '', delay = 3000) => {
  const [textDebounce, setTextDounce] = useState('');

  useEffect(() => {
    const hander = setTimeout(() => {
      setTextDounce(text)
    }, delay)

    return () => {
      clearTimeout(hander)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return {
    textDebounce
  }
}

export default useDebounce