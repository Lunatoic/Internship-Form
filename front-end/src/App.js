import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import img1 from './images/Group.png';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={img1} alt='HERE IT is'></img>
        <h1 id='heading'>Build your portfolio in minutes</h1>
      </div>

    <div className='container'>
      <div className='leftContainer'>
        <div className='text1'>Build your Portfolio instantly !!</div>
        <div className='text2'>Start testing in minutes !</div>
      </div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Form />} />

        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
