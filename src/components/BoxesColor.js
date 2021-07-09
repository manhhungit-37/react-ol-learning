import React, { useState, useContext } from 'react';

// context
import { AppContext } from '../context/AppContext';
import { TodoContext } from '../context/TodoContext';

const bgBoxes = {
  red: "#ff0000",
  gold: "#ffd700",
  cyan: "#00ffff",
  magenta: "#ff00ff",
}

export default function BoxesColor() {
  const { name, setName }  = useContext(AppContext);
  const { todos }  = useContext(TodoContext);
  const [boxes, setBoxes] = useState(bgBoxes);
  const [checked, setChecked] = useState('');

  console.log('appContext of boxColors: ', name)
  console.log('todos of boxColors: ', todos)

  function onChange(event, color) {
    const { checked } = event.target;
    setChecked(color);
    if(!checked) {
      setChecked('')
      setBoxes(bgBoxes)
      return;
    }
    setBoxes({
      red: color,
      gold: color,
      cyan: color,
      magenta: color,
    })
  }

  return (
    <div className="boxes">
      <div 
        style={{ backgroundColor: boxes['red']}}>
        red
        <input 
          type="checkbox" 
          name="color" 
          checked={checked === 'red'} 
          onChange={event => onChange(event, 'red')}
        />
      </div>
      <div style={{ backgroundColor: boxes['gold']}}>
        gold
        <input 
          type="checkbox" 
          name="color" 
          checked={checked === 'gold'} 
          onChange={event => onChange(event, 'gold')}
        />
      </div>
      <div style={{ backgroundColor: boxes['cyan']}}>
        cyan
        <input 
          type="checkbox" 
          name="color" 
          checked={checked === 'cyan'} 
          onChange={event => onChange(event, 'cyan')}
        />
      </div>
      <div style={{ backgroundColor: boxes['magenta']}}>
        magenta
        <input 
          type="checkbox" 
          name="color" 
          checked={checked === 'magenta'} 
          onChange={event => onChange(event, 'magenta')}
        />
      </div>

      <button type="button" onClick={() => setName('truong')}>change name</button>
    </div>
    );
  }