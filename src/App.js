import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./Navigation.js";
function App({ notes }) {
  const [count, setCount] = useState(0);

  const addcard = (event) => {
    if (event.target.innerText == "Add to cart") {
      addItem(event);
    } else if (event.target.innerText == "Remove from Cart") {
      removeItem(event);
    }
  }

  function addItem(event) {
    setCount(count + 1);
    event.target.innerText = "Remove from Cart";
  }

  function removeItem(event) {
    setCount(count - 1);
    event.target.innerText = "Add to cart";
  }

  return (
    <div>
      <Navigation count={count} />
      <div className="text-center" style={{ backgroundColor: "greenyellow", height: 200 }}>
        <h1 className="pt-5">Shop in style</h1>
        <p className="mb-5" >With this shop hompeage template</p>
      </div>
      <div className="row m-5">
        {notes.map(note =>
          note.important ? (
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center">
                <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..." /></a>

                <h5 className="p-3">{note.Name}</h5>
                <p>{note.price}</p>
                <p>⭐⭐⭐⭐⭐</p>
                <div className="card-footer mt-2">
                  <button className='m-2' onClick={addcard}>{note.available}</button>
                </div >
              </div>
            </div>
          ) : (
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..." /></a>

                <h5 className="p-3">{note.Name}</h5>
                <p>{note.price}</p>

                <div className="card-footer mt-5">
                  <button className='m-2' onClick={addcard}>{note.available}</button>
                </div >
              </div>
            </div>
          )
        )}

      </div>
      <div className="text-center" style={{ backgroundColor: "greenyellow", height: 150 }}>

        <p className="p-5" >Copyright © Your Website 2023</p>
      </div>
    </div>

  )
}
export default App

