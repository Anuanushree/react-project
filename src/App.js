import React, { useState } from "react";
// import ReactDOM from "react-dom";

function Note({ note }) {
  const [count, setCount] = useState(0);
  const addcard = (event) => {

    setCount(count + 1);

    event.currentTarget.disabled = true;

  }
  {/* <div>{count}</div> */ }
  if (note.important) {
    return (
      < div >
        <h5>{note.Name}</h5>
        <div>{note.price}</div>
        <div>⭐⭐⭐⭐⭐</div>
        <button onClick={addcard}>{note.available}</button>
      </div >
    )
  }
    return(
      < div >
        <h5>{note.Name}</h5>
        <div>{note.price}</div>
        <button onClick={addcard}>{note.available}</button>
      </div >
    )

  }
  function App({ notes }) {

    const viewCard = (event) => {

      window.location.reload()
    }
    return (
      <div>
        <h1>Notes</h1>
        {/* <div>{count}</div> */}
        <button onClick={viewCard}> count</button>
        {notes.map(note =>
          <Note note={note} />
        )}
      </div>
    )
  }
  export default App

