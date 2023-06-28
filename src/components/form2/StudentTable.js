import React from 'react';
import { Link } from "react-router-dom";


function Stable({ stabledata, studentdata,setstudentdata }) {

function setID(id) {
    localStorage.setItem('id', id);
}

const deleteditems = (id) => {
    let changevalue = [...studentdata];

    for (var i = 0; i < changevalue.length; i++) {
        if (changevalue[i].id == id) {
            break;
        }
    }
    changevalue.splice(i, 1)
    setstudentdata([...changevalue])
}

return (
    <>
        <tr>
            <td>{stabledata.id}</td>
            <td>{stabledata.sname}</td>
            <td>{stabledata.sfathername}</td>
            <td>{stabledata.sclass}</td>
            <td>{stabledata.steacher}</td>
            <td>{stabledata.sdob}</td>
            <td>{stabledata.saddress}</td>
            <td><Link to={`/studentedit`}>
                <button className="btn btn-info"
                 onClick={(e) =>  
                    setID(stabledata.id)}
                    variant="info">
                    Update</button></Link>
                <Link >
                    <button className='btn btn-danger'
                     onClick={(e) => 
                        deleteditems(stabledata.id)}>delete</button>
                </Link>
            </td>
        </tr>

    </>
)
}
function StudentTable({ studentdata,setstudentdata }) {
return (
<div>
    <br />
    <h2>Student Details</h2>

    <br />
    <table className="table table-striped table-dark table-bordered">
        <thead>
            <tr>
                <th>id</th>
                <th>Student Name</th>
                <th>Father Name </th>
                <th>Class</th>
                <th>Teacher</th>
                <th>Date of Birth</th>
                <th>Address</th>

            </tr>
        </thead>
        <tbody>
            {studentdata.map((stabledata) =>
                <Stable key={stabledata.id} studentdata={studentdata} setstudentdata={setstudentdata} stabledata={stabledata} />

            )}
        </tbody>
    </table>
</div>
)
}

export default StudentTable;