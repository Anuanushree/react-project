import React, { useState, useParams } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './components/Create-user';
import List from './components/list-user';
import Edit from './components/Edit-user';
import Dashboard from './components/Dashboard';
// import EditId from './components/EditId';
import './App.css'

function App(props) {
  const [array, setArray] = useState(props.data);
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phn, setphn] = useState('');
  const [textarea, settextarea] = useState('');

  let handlesubmit = (event) => {
    event.preventDefault();

    let object = {
      id: array.length + 1,
      name: name,
      email: email,
      password: password,
      phn: phn,
      textarea: textarea,
    }
    setArray(array.concat(object));
    console.log(object)
    setName('');
    setemail('');
    setphn('');
    setpassword('');
    settextarea('');
  }

  let addname = (event) => {
    setName(event.target.value)
  }

  let addemail = (event) => {
    setemail(event.target.value)
  }
  let addpassword = (event) => {
    setpassword(event.target.value)
  }
  let addphn = (event) => {
    setphn(event.target.value)
  }
  let addtextarea = (event) => {
    settextarea(event.target.value)
  }
  function EditId({ array }) {
    const { id } = useParams();
    // const data = array.find(n => n.id === id);
    // console.log(data)
    return (
      <div>
        <p>id</p>
        {/* <p>{data.id}</p>
        <p>{data.name}</p> */}
      </div>
    )
  }
  return (
    <Router>

      <h2 className='text-center' id='headingtag'> ADMIN FORM</h2>
      <div id="page-top">
        <div id="wrapper">
          <Dashboard />
          <div id="content-wrapper" className="d-flex flex-column">
            <div >
              <div className="container-fluid">

                <Routes>

                  <Route path='/' element={<Create handlesubmit={handlesubmit}
                    addname={addname} addpassword={addpassword} addtextarea={addtextarea} addemail={addemail} name={name}
                    email={email} addphn={addphn} password={password} phn={phn} textarea={textarea} />} />
                  <Route path='/list' element={<List array={array} />} />
                  <Route path='/edit' element={<Edit array={array} setArray={setArray} />} />
                  <Route path='/list/:id' element={<EditId array={array} />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App