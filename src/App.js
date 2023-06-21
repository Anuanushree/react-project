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


import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const MessageContext = createContext()

function ChildComponent(){
  const {profileName,setProfileName}=useContext(MessageContext); 
 
  let onchangeProfileHandler=(event)=>{
    setProfileName(event.target.value);
  }
  return(
<div>
  <h2>Profile Name :{profileName}</h2>
  <input
   type='text'
   value ={profileName}
   onchange={onchangeProfileHandler}
  />

</div>
  )
}

function App() {
  const [profileName,setProfileName] = useState('')
  return (
    <div>
      <h1>app component</h1>
      < MessageContext.Provider value={{profileName,setProfileName}}>
      <ChildComponent/>
      </MessageContext.Provider>
    </div>
  )
}

export default App