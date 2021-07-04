import { useRef, useState } from "react"

export default function GenerateBoxes() {
  const numberRef = useRef(null);
  const [boxes, setBoxes] = useState([]);

  function handleClick() {
    const inputValue = Number(numberRef.current.value);
    if (inputValue > 0 && inputValue < 128) {
      setBoxes(new Array(inputValue).fill());
    }
    else {
      alert("0 < Number of Boxes < 128");
    }
  }

  return (
    <div>
      <label>Number of boxes:</label>
      <input type="text" ref={numberRef} />
      <input type="button" value="Generate" onClick={handleClick} />   
      <hr />
      {boxes.length > 0 && boxes.map((_, boxIndex) => (
        <div key={boxIndex} className="gray">
          <span>Box #{boxIndex+1}</span>
        </div>
      ))}
    </div>
  )
}