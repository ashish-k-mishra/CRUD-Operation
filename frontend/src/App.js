import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './User';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
