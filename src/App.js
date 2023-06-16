// import { Component } from "react";

// class App extends Component{
//   render(){
//     return <div>Hello,world</div>
//   }
// }

// import React from "react";
// function Hello(props){
//   return(
//     <div>Hello world {props.name}</div>
//   )
// }
// function App(){
//   return(
//     <div>
//       <Hello name={'anu'}/>
//     </div>
//   )
// }
// import { Component } from "react";
// class Hello extends Component {

//   render() {
//     const { name } = this.props;
//     return (
//       <div>Hello,{name}</div>
//     )
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <Hello name={'Anushree'} />
//     )
//   }
// }
// export default App
// import React, { Component } from 'react'

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     }
//   }
//   handleClick = () => {
//     this.setState((prevstate) => ({
//       count: prevstate.count + 1,
//     }))
//   }
//   handleClickminus = () => {
//     this.setState((prevstate) => ({
//       count: prevstate.count - 1,
//     }))
//   }
//   handleClickreset = () => {
//     this.setState((prevstate) => ({
//       count: 0,
//     }))
//   }


//   render() {
//     return (
//       <div>
//         <p>count:{this.state.count}</p>
//         <button onClick={this.handleClick}>plus</button>
//         <button onClick={this.handleClickminus}>minus</button>
//         <button onClick={this.handleClickreset}>reset</button>
//       </div>
//     )
//   }
// }

// export default App

// import React, { Component } from 'react'
// class Hello extends Component{
//   render(){
//     return(
//       <div>hello</div>
//     )
//   }
// }
// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello/>
//       </div>
//     )
//   }
// }

// export default App
// import React, { useState } from 'react'

// function App() {
//   const [counter, setcounter] = useState(0);

//   const handleplus = () => {
//     setcounter(counter + 1)
//   }
//   const handleminus = () => {
//     setcounter(counter - 1)
//   }
//   const handlereset = () => {
//     setcounter(0)
//   }
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={handleplus}>plus</button>
//       <button onClick={handleminus}>minus</button>
//       <button onClick={handlereset}>reset</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// function Color(props) {
//   return (
//     <div>
//       <p>{props.text}</p>
//       <p>{props.code}</p>
//     </div>
//   )
// }
// function Card(props) {
//   return (
//     <div>
//       <p>{props.text}</p>
//       <p>{props.salary}</p>
//       <p>{props.img}</p>
//     </div>
//   )
// }
// function App() {
//   const monthly = "EARNINGS (MONTHLY)";
//   const monthlysalary = '$ 40,000';
//   // const img ='https://w7.pngwing.com/pngs/563/791/png-transparent-dollar-sign-illustration-united-states-dollar-icon-design-icon-dollar-sign-text-logo-number-thumbnail.png'
//   const annual = "EARNINGS (ANNUAL)";
//   const annualsalary = '$215,000';
//   const task = "TASKS";
//   const percentage = '50%';
//   const request = "PENDING REQUESTS";
//   const number = '18';
//   return (
//     <div>
//       <div>
//         <Card text={monthly} salary={monthlysalary} />
//         <Card text={annual} salary={annualsalary} />
//         <Card text={task} salary={percentage} />
//         <Card text={request} salary={number} />
//       </div>
//       <div>
//         <Color text='primary' code='#4e73df' />
//         <Color text='Success' code='#1cc88a' />
//         <Color text='Info' code='#36b9cc' />
//         <Color text='Warning' code='#f6c23e' />
//         <Color text='Danger' code='#e74a3b' />
//         <Color text='Secondary' code='#858796' />
//         <Color text='Ligh' code='#f8f9fc' />
//         <Color text='Dark' code='#5a5c69' />

//       </div>
//     </div>

//    )
// }

// export default App
// import React from 'react'
// import { useEffect, useState } from 'react'

// function App() {
//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setdata(data));

//   }, []);
//   return (
//     <div>
//       <h1>API DATA</h1>
//       {
//         data ? (
//           < ul >
//             {
//               data.map(item => <li key={item.id}> {item.title} </li>)
//             }
//           </ul>
//         ) : (
//           <p>loading data....</p>
//         )
//       }
//     </div >
//   )
// }

// export default App