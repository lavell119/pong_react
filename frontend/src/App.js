import Lobby from './components/Lobby'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element = {<Lobby />}></Route>
          <Route exact path ="/table/:id" element = {<Table />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
