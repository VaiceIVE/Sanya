import { Route, Routes } from 'react-router-dom';
import Notepad from './Notepad';
import './style/style.css';
import UserPage from './user'

const App = () => {

  return (
    <div className='wrapper'>

      <div className="App">
        <div className='App__content container'>
          <Routes>
            <Route path="/admin" element={<Notepad />}/>
            <Route path="/" element={<UserPage />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
