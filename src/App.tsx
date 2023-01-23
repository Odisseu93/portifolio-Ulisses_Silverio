import { useState } from 'react'
import { Badge } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Badge  className='m-3'>Hello World!</Badge>
    </div>
  )
}

export default App
