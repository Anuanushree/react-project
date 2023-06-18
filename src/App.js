import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'

const viewCard = (event) => {
  window.location.reload()
  // event.currentTarget.disabled = false;
}
function App({ notes }) {
  const [count, setCount] = useState(0);
  // const[item ,setitem] = useState([])
  const addcard = (event) => {
    setCount(count + 1);
  
    event.currentTarget.disabled = true;
  }

  return (
    <div>
     
      <button className="btn btn-success p-2 mt-2" onClick={viewCard}><img style={{ width: 30, height: 30 }} src='https://em-content.zobj.net/thumbs/120/toss-face/342/shopping-cart_1f6d2.png' alt="..." /> card : {count}</button>
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
                  <button className='m-2' onClick={addcard }>{note.available}</button>
                </div >
              </div>
            </div>
          ) : (
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 text-center">
                <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..." /></a>

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

