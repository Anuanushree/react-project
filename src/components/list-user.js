import React from 'react';
function Table({ tabledata }) {

    return (
    <>
        <tr>
            <td >{tabledata.id}</td>
            <td>{tabledata.name}</td>
            <td>{tabledata.email}</td>
            <td>{tabledata.password}</td>
            <td>{tabledata.phn}</td>
            <td>{tabledata.textarea}</td>
           </tr>

     </>
    )
}
function List({array}) {

    return (
        <>
        <br/>
            <h2 className='text-center' id='headingtag1'>User List</h2>
        <br/>
            <table className="table table-striped table-dark table-bordered">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone number</th>
                <th>About yourself</th>
            </tr>
            </thead>
            <tbody>
            {array.map((tabledata) =>
                <Table key={tabledata.id} tabledata={tabledata} />

            )}
         </tbody>
        </table>
        </>
    )
}
export default List;





