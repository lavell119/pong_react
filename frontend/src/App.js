import Lobby from './components/Lobby'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './components/Table'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element = {<Lobby />}></Route>
          <Route exact path ="/table/:id" element = {<Table />}></Route>
          <Route exact path ="/login" element = {<Login />}></Route>
          <Route exact path ="/signup" element = {<Signup />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
