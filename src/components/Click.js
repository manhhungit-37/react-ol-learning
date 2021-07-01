export default function Click() {

  function handleClick(id) {
    console.log(1);
  }

  function onClick(id) {
    return function() {
      console.log(id);
    }
  }

  return (
    <div>
      <button onClick={(id) => handleClick(id)}>Click</button>
      <button onClick={onClick(1)}>Click</button>
    </div>
  )
}