import React, { useState} from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './components/Form1/TeacherForm';
import List from './components/Form1/Teacherdata';

import Dashboard from './components/Dashboard';
import StudentTable from './components/form2/StudentTable';
import Update from './components/form2/StudentForm';
import StudentEdit from './components/form2/studentEdit';
import TeacherEdit from './components/Form1/TeacherEdit';


// Create a context
// const MyContext = createContext();


function App(props) {
  const [studentdata, setStudentdata] = useState(props.sdata);
 
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
      <h2 className='text-center' id='headingStyle'>School Admission</h2>
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
                  <Route path='/Teacherdata' element={<List array={array} setArray={setArray}/>} />
                  <Route path='/studentForm' element={<Update array={array} setArray={setArray} 
                  setStudentdata={setStudentdata} studentdata={studentdata} />} />
                  <Route path='/Studenttable' element={<StudentTable studentdata={studentdata} setstudentdata={setStudentdata} />} />
                  <Route path='/studentedit' element={<StudentEdit array={array} setArray={setArray}
                    setStudentdata={setStudentdata} studentdata={studentdata} />}/>
                  <Route path='/teacheredit' element={<TeacherEdit array={array} setArray={setArray}/>} />
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