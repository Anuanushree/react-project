import React, { useState} from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './components/TeacherForm';
import List from './components/Teacherdata';

import Dashboard from './components/Dashboard';
import StudentTable from './components/StudentTable';
import Update from './components/StudentForm';


// Create a context
// const MyContext = createContext();


function App(props) {
  const [studentdata, setStudentdata] = useState([]);
 
  const [array, setArray] = useState(props.data);
  const [name, setName] = useState('');
  const [tclass, settclass] = useState('');
  const [subject, setsubject] = useState('');
  const [phn, setphn] = useState('');
  const [experience, setexperience] = useState('');

  let handlesubmit = (event) => {
    event.preventDefault();

    let object = {
      id: array.length + 1,
      name: name,
      tclass: tclass,
      subject: subject,
      phn: phn,
      experience: experience,
    }
    setArray(array.concat(object));
    console.log(object)
    setName('');
    settclass('');
    setphn('');
    setsubject('');
    setexperience('');
  }

  let addname = (event) => {
    setName(event.target.value)
  }

  let addtclass = (event) => {
    settclass(event.target.value)
  }
  let addsubject = (event) => {
    setsubject(event.target.value)
  }
  let addphn = (event) => {
    setphn(event.target.value)
  }
  let addexperience = (event) => {
    setexperience(event.target.value)
  }

  return (
    <Router>
      {/* <MyContext.Provider value={{ studentdata, setStudentdata }}>
        <Update />
        <StudentTable />
      </MyContext.Provider> */}
      <div id="page-top">
        <div id="wrapper">
          <Dashboard />
          <div id="content-wrapper" className="d-flex flex-column">
            <div >
              <div className="container-fluid">

                <Routes>

                  <Route path='/' element={<Create handlesubmit={handlesubmit}
                    addname={addname} addsubject={addsubject} addexperience={addexperience} addtclass={addtclass} name={name}
                    tclass={tclass} addphn={addphn} subject={subject} phn={phn} experience={experience} />} />
                  <Route path='/list' element={<List array={array} />} />
                  <Route path='/edit' element={<Update array={array} setArray={setArray} 
                  setStudentdata={setStudentdata} studentdata={studentdata} />} />
                  <Route path='/stable' element={<StudentTable studentdata={studentdata} />} />
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