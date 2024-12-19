import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/read/:id' element={<Read/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
