import { useState } from 'react'
import Logo from './logo.svg?react'

function App () {
  const [counter, setCounter] = useState(0)

  function handleIncrement () {
    setCounter(counter => counter + 1)
  }

  function handleDecrement () {
    setCounter(counter => counter - 1)
  }

  return (
    <>
      <Logo />
      <h1>{counter}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export { App }
