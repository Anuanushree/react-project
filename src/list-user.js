import React from 'react'
import Create from './Create-user';
function List(props) {
    
  return (
    <div>
      <table className="table">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Profile</th>
              </tr>
          </thead>
          <tbody>
              {/* {tableData.map((data, index) => {
                  return ( */}
                      <tr>
                          <td>{props.name}</td>
                          <td>{props.email}</td>
                          <td>{props.password}</td>
                      </tr>
                  {/* ); */}
              {/* })} */}
          </tbody>
      </table>  
    </div>
  )
}

export default List