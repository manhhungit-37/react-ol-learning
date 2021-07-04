import React, { useState } from 'react';

const bgBoxes = {
  red: "#ff0000",
  gold: "#ffd700",
  aqua: "#00ffff",
  purple: "#ff00ff",
  total: false
}

function BoxesColor2() {
  const [boxes, setBoxes] = useState(bgBoxes);

  function onClick(event) {
    const name = event.target.attributes.name.value;
    if (boxes.total !== name) {
      setBoxes({
        ...boxes,
        total: name
      })
      return;
    }
    setBoxes(bgBoxes);
  }

  return (
    <div className="boxes2">
      <div style={{ backgroundColor: boxes.total ? boxes.total : boxes.red }} name="red" onClick={onClick} >Red</div>
      <div style={{ backgroundColor: boxes.total ? boxes.total : boxes.gold }} name="gold" onClick={onClick} >Gold</div>
      <div style={{ backgroundColor: boxes.total ? boxes.total : boxes.aqua }} name="aqua" onClick={onClick} >Aqua</div>
      <div style={{ backgroundColor: boxes.total ? boxes.total : boxes.purple }} name="purple" onClick={onClick} >Purple</div>
    </div>
  );
}

export default BoxesColor2;