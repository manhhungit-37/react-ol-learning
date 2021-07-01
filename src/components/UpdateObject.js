import { useState } from "react"

export default function UpdateObject() {
  const [messageObj, setMessageObj] = useState({
    author: "",
    message: {
      id: 0,
      text: ""
    }
  });
  
  return (
    <>
      <input type="text" onChange={e => {
        const newText = e.target.value;
        console.log(newText);
        setMessageObj(prev => {
          return {
            ...prev,
          message: {
            ...prev.message,
            text: newText,
          }
          };
        })
      }} />
    </>
  )
}