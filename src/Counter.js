import { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Flavio')
  
  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === 'Jackie' ? 'Loulou' : 'Jackie')}>Change name</button>
    </div>
  )
}

<Counter />

export default Counter;