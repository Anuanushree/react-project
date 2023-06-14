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
