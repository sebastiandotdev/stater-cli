import { useCounter } from './stores/counter'

function App() {
  const count = useCounter(state => state.count)
  const { increment, decrement } = useCounter()
  return (
    <main className="mx-auto container">
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </main>
  )
}

export default App
