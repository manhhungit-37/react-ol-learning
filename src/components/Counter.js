export default function Counter({ plus, increment, multiple }) {
  return (
    <div>
      <button onClick={plus}>Click +</button>
      <button onClick={increment}>Click -</button>
      <button onClick={() => multiple(10)}>Multiple</button>
    </div>
  )
}