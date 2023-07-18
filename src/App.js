import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom';
import Create from './components/Create-user';
import Register from './components/Register';
import Rpassword from './components/Rpassword';
import './App.css'


function App() {
  const [array, setArray] = useState([]);
  // const [name, setName] = useState('');
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');
  // const [phn, setphn] = useState('');
  // const [textarea, settextarea] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://crud-kb35.onrender.com/user')
  //     .then(response => setArray(response.data));
  // });

  // let handlesubmit = (event) => {
  //   event.preventDefault();

  //   let object = {
  //     id: array.length + 1,
  //     name: name,
  //     email: email,
  //     password: password,
  //     phn: phn,
  //     textarea: textarea,
  //   }
  //   axios
  //     .post('https://crud-kb35.onrender.com/user', object)
  //   setName('');
  //   setemail('');
  //   setphn('');
  //   setpassword('');
  //   settextarea('');
  // }

  // let addname = (event) => {
  //   setName(event.target.value)
  // }

  // let addemail = (event) => {
  //   setemail(event.target.value)
  // }
  // let addpassword = (event) => {
  //   setpassword(event.target.value)
  // }
  // let addphn = (event) => {
  //   setphn(event.target.value)
  // }
  // let addtextarea = (event) => {
  //   settextarea(event.target.value)
  // }

return (
<Router>
      <Link to='/' ></Link>
      <Routes>

      <Route path='/' element={<Create array={array} setArray={setArray} />} />
      <Route path='/register' element={<Register setArray={setArray} />}/>
      <Route path='/resetpassword' element={<Rpassword setArray={setArray} />} />
      </Routes>
  
        
</Router>
)
}

export default App;