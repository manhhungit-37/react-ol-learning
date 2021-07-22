export default function Click() {

  function handleClick(id) {
    console.log(1);
  }

  return (
    <div>
      <button onClick={(id) => handleClick(id)}>Click</button>
    </div>
  )
}