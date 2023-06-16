import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function Note({ note }) {
//   const [count, setCount] = useState(0);
//   const addcard = (event) => {

//     setCount(count + 1);

//     event.currentTarget.disabled = true;

//   }

//   if (note.important) {
//     return (
//       < div >
//         <h5>{note.Name}</h5>
//         <div>{note.price}</div>
//         <div>⭐⭐⭐⭐⭐</div>
//         <button onClick={addcard}>{note.available}</button>
//       </div >
//     )
//   }
//   return (
//     < div >

//       <h5>{note.Name}</h5>
//       <div>{note.price}</div>
//       <button onClick={addcard}>{note.available}</button>
//     </div >
//   )

// }
const viewCard = () => {
  window.location.reload()
}
function App({ notes }) {
  const [count, setCount] = useState(0);
  const addcard = (event) => {
    setCount(count + 1);
    event.currentTarget.disabled = true;
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={viewCard}>card:{count}</button>
      <div>

        {notes.map(note =>
          note.important ? (
            < div >
              <h5>{note.Name}</h5>
              <div>{note.price}</div>
              <p>⭐⭐⭐⭐⭐</p>
              <button onClick={addcard}>{note.available}</button>
            </div >
          ) : (
            < div >
              <h5>{note.Name}</h5>
              <p>{note.price}</p>
              <button onClick={addcard}>{note.available}</button>
            </div >
          )
        )}
      </div>
    </div>
  )
}
export default App

