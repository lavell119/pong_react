import Lobby from './components/Lobby'
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Table from './components/Table'
import Login from './components/Login'
import Signup from './components/Signup'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function App() {
  const u = 'lll'
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)

  useEffect(() => {
    //check if user exists in local storage
    const user = JSON.parse(localStorage.getItem('user'))

    if(user) {
      console.log('user is', user)
      dispatch({ type: 'LOGIN', payload: user.user})
      console.log('dispatch sent, user is:', user)
    }
    if(!user) {
      console.log('no user')
    }
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/l" element={user ? <Lobby />: <Navigate to="/si" />}></Route>
          <Route exact path ="/" element = {<Lobby />}></Route>
          <Route exact path ="/table/:id" element = {<Table />}></Route>
          <Route exact path ="/login" element = {<Login />}></Route>
          <Route exact path ="/signup" element = {<Signup />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
