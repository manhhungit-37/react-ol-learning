import { useRef, useState } from "react"

export default function GenerateBoxes() {
  const input = useRef(null);
  const [boxes, setBoxes] = useState([]);

  function handleClick() {
    const inputValue = Number(input.current.value);
    if (inputValue > 0 && inputValue < 128) {
      setBoxes(new Array(inputValue).fill());
    }
    else {
      alert("0 < Number of Boxes < 128");
    }
  }

  console.log(boxes);

  return (
    <div>
      <label>Number of boxes:</label>
      <input type="text" ref={input} />
      <input type="button" value="Generate" onClick={handleClick} />   
      <hr />
      {boxes.length > 0 && boxes.map((_, boxIndex) => (
        <div key={boxIndex} className="gray">Box #{boxIndex+1}</div>
      ))}
    </div>
  )
}