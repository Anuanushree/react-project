
// function App() {
//   const now = new Date();
//   const a=10;
//   const b=20;
//   console.log(now,a+b)
//   // console.log("hellow from component")
//   return (
//     <div>
//       <p>Hello World.{now.toString()}</p>
//       <p>
//         {a}plus{b} is{a+b}
//       </p>
//     </div>
//   );
// }

// export default App;

import React from 'react'

function Hello(props) {
  return (
    <div>
      <p>Hello {props.name},your age is {props.age}</p>
    </div>
  )
}

function App() {
  const age = 10;
  return (
    <div>
   <h2>Greeting</h2>
   <Hello name='anu' age={10+20}/>
    <Hello name='shree' age={age}/>
    </div>
  )
}

export default App

