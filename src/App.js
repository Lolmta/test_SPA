import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<MainPage />}/>
       <Route path='/user' element={<UserPage />}/>
     </Routes>
   </BrowserRouter>

  );
}

export default App;
