import Notepad from './Notepad';
import './style/style.css';

const App = () => {

  return (
    <div className='wrapper'>
      <div className="App">
        <div className='App__content container'>
          <Notepad/>
        </div>
      </div>
    </div>
  )
}

export default App
