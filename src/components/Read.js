import React from 'react';
import book from '../assets/book.jpeg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update({ array, library, setLibrary }) {

  function update(id) {
    localStorage.setItem('id', id);
  }
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <img src={book} className='image' alt='book' ></img>
      </div>
      <div className='col-sm-8' >
        <div className='card pl-5 ' id='card-body'>
          <div>Student Name :{array.Name}</div>
          <div>Id : {array.id} </div>
          <div>BookName : {array.bookName}</div>
          <div>Location : {array.location}</div>
          <div>Date : {array.date}<span>
            <Link to='/Update'><button className='btn btn-primary btn-margin'
              id='button' onClick={(e) => update(array.id)}>Edit</button></Link>
          </span></div>
          
        </div>
      </div>
    </div >
  )
}
function Read({ library, setLibrary }) {
  return (
    <>

      <div className='container-fluid'>
        <div className='card card-container'>

          {library.map((array) =>

            <Update key={array.id} array={array} library={library} setLibrary={setLibrary} />
          )}
        </div>
      </div>
    </>
  )
}

export default Read;


