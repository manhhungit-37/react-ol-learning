import { useState } from "react";
import Counter from "./Counter";

export default function Comment() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(pre => setCounter(pre+1));
  }

  function mul() {
    setCounter(pre => setCounter(pre-1));
  }

  return (
    <>
      <Counter counter={counter} plus={plus} mul={mul} />
      {counter}
    </>
  )
}