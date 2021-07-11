import React, { useRef } from 'react'

function UseRef() {
  const inputRef = useRef();
  const divRef = useRef();

  function onChange(e) {
    inputRef.current.value = e.target.value
  }

  function getOffWidth() {
    console.log('divref: ', divRef.current.offsetWidth)
  }

  return (
    <div>
      <h2>useRef hooks</h2>
      <div ref={divRef} onClick={getOffWidth}>lorem abaclorem abaclorem abaclorem abaclorem abaclorem abaclorem abaclorem abac</div>
      <input type="text" ref={inputRef} onChange={onChange} />
      <button type="button" onClick={() => {
        console.log(inputRef.current.value)
      }}>submit</button>
    </div>
  )
}

export default UseRef
