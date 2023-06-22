import React from 'react'
import Create from './Create-user';
function list() {
  return (
    <div>
      <table className="table">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Profile</th>
              </tr>
          </thead>
          <tbody>
              {tableData.map((data, index) => {
                  return (
                      <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.profile}</td>
                      </tr>
                  );
              })}
          </tbody>
      </table>  
    </div>
  )
}

export default list