import './App.css'
import BearCounter from './components/BearCounter'
import { useBearStore } from './store/bears'

function App() {
const increase = useBearStore((state) => state.increase);

  return (
    <>
      <div>
        <BearCounter />

      <button onClick={increase}>++++</button>
      </div>
    </>
  )
}

export default App
