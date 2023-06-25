// import React from 'react'
// import { useContext } from 'react';
// import { createContext } from 'react'
// import { useState } from 'react'

// const MessageContext = createContext();

// function GrandChildComponent(){
//   const message = useContext(MessageContext)
//   return(
//     <div>
//       <h2>GrandChildComponent msg </h2>
//       <p>{message}</p>
//     </div>
//   )
// }
// function Childnode(){
// const message = useContext(MessageContext)
//   return(
//     <div>
//       <h2>childnode</h2>
//      <p>{message}</p>
//      <GrandChildComponent/>
//     </div>
//   )
// }
// function App() {
//  const[message ,setMessage]=useState('hello from app');
// // const message = 'Hello from app' 
// return (
//     <div>
//      <h2>parent node</h2>
//       <MessageContext.Provider value={message}>
//        <Childnode/>
//        {/* <GrandChildComponent/> */}
//      </MessageContext.Provider>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'
// import { createContext } from 'react'
// import { useContext } from 'react'

// const MessageContext = createContext()

// function ChildComponent(){
//   const {profileName,setProfileName}=useContext(MessageContext); 

//   let onchangeProfileHandler=(event)=>{
//     setProfileName(event.target.value);
//   }
//   return(
// <div>
//   <h2>Profile Name :{profileName}</h2>
//   <input
//    type='text'
//    value ={profileName}
//    onChange={onchangeProfileHandler}
//   />

// </div>
//   )
// }

// function App() {
//   const [profileName,setProfileName] = useState('')
//   return (
//     <div>
//       <h1>app component</h1>
//       < MessageContext.Provider value={{profileName,setProfileName}}>
//       <ChildComponent/>
//       </MessageContext.Provider>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Create from './components/Create-user';
import Edit from './components/Edit-user';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list-user';
function App() {
  const [tables, settable] = useState([])
  
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    // const checkVal = !Object.values(formObject).every((res) => res === "");
    // if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      settable(dataObj);
      setFormObject('')
      const isEmpty = { name: "", email: "", password: "" };
      setFormObject(isEmpty);
    // }
  }
  return (
    <Router>

      <div id="page-top">
        <div id="wrapper">
          <Dashboard />

          <div className="container-fluid">
            <div id="content-wrapper" className="d-flex flex-column">

              <Routes>
                <Route path='/create' element={<Create onValChange={onValChange} formObject={formObject}
                  handlesubmit={handlesubmit} />} />
                <Route path='/list' element={<List tables={tables} />} />
                <Route path='/edit' element={<List tables={tables} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>

  )
}

export default App