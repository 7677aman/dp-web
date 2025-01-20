import { useState } from 'react'
import './index.css'
import Loader from './components/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loader/>
    </>
  )
}

export default App
