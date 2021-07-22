import { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
  const colorList = ['red', 'green', 'pink', 'yellow'];
  const currentIndex = colorList.indexOf(currentColor);
  let newIndex = currentIndex;

  while(colorList[newIndex] === currentColor) {
    newIndex = Math.trunc(Math.random() * 4);
  }

  return colorList[newIndex];
}

function useMagicBox() {
  const [color, setColor] = useState('red');
  const colorRef = useRef('');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      colorRef.current = newColor;
      setColor(newColor);
    }, 2000)
    return () => {
      clearInterval(colorInterval);
    }
  }, [])

  return { color };
}

export default useMagicBox
