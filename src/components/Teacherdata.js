import React from 'react';

function Table({ tabledata }) {
    return (
    <>
        <tr>
            <td scope="col">{tabledata.id}</td>
            <td>{tabledata.name}</td>
            <td>{tabledata.tclass}</td>
            <td>{tabledata.subject}</td>
            <td>{tabledata.phn}</td>
            <td>{tabledata.experience}</td>
        </tr>

     </>
    )
}
function List({array}) {
   
    return (
        <>
        <br/>
        <h2>User List</h2>
        <br/>
            <table className="table table-striped table-dark table-bordered">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>phone number</th>
                <th>about yourself</th>
            </tr>
            </thead>
            <tbody>
            {array.map((tabledata) =>
                <Table key={tabledata.id} array={array} tabledata={tabledata} />

            )}
         </tbody>
        </table>
        </>
    )
}
export default List;

// function User() {
//   return (
//     <div>
//         <Create/>
//     </div>
//   )
// }

// export default User





