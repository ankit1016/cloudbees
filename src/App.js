/* eslint-disable react-hooks/exhaustive-deps */


import './App.css';
import UserList from './component/userList';
import { Route, Routes } from 'react-router-dom';
import UserDetail from './component/userDetails';

function App() {



  return (
    <div >
        <Routes>
          <Route path='/' Component={UserList}/>
          <Route path='/user/:username' Component={UserDetail}/>
     </Routes>
    </div>
  );
}

export default App;
