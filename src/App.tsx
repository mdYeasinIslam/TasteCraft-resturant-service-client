
import { Toaster } from 'react-hot-toast'
import './App.css'
import { Root } from './Router/Root'

function App() {

  return (
    <div data-theme='light' className=' max-w-screen-xl mx-auto'>
      <Root />
            <Toaster />
    </div>
  )
}

export default App
