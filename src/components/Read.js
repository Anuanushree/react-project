import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function TableData({ data }) {

  function update(id) {
    localStorage.setItem('id', id);
  }
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.bookName}</td>
        <td>{data.author}</td>
        <td>{data.year}</td>
        <td>
          <Link to={'/Update'}>
            <button onClick={(e) => update(data.id)
            }>update</button></Link>
        </td>
      </tr>
    </>
  )
}
function Read({ library }) {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th >Id</th>
            <th >Book Name</th>
            <th >Author</th>
            <th >Published Year</th>
          </tr>
        </thead>
        <tbody>
          {library.map((data) =>

            <TableData keys={data.id} data={data} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Read;