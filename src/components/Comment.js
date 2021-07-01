import { useState } from "react";
import Counter from "./Counter";

export default function Comment() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(prevState => prevState + 1);
  }

  function increment() {
    setCounter(prevState => prevState - 1);
  }

  function multiple(number) {
    setCounter(prevState => prevState * number)
  }

  return (
    <>
      <Counter 
        counter={counter} 
        plus={plus} 
        increment={increment}
        multiple={multiple}
      />
      {counter}
    </>
  )
}