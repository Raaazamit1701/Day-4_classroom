import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './component/Component_progressbar/Progressbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Progress />
    </>
  )
}

export default App
