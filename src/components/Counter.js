export default function Counter({ counter, plus, mul }) {
  return (
    <div>
      <button onClick={plus}>Click +</button>
      <button onClick={mul}>Click -</button>
    </div>
  )
}