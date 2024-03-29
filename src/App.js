import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './components/Layout/Home/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
