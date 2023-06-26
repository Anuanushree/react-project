import React from 'react'
import Update from './StudentForm'
function Stable({ stabledata }) {
    return (
        <>
            <tr>
                <td scope="col">{stabledata.id}</td>
                <td>{stabledata.sname}</td>
                <td>{stabledata.sfathername}</td>
                <td>{stabledata.sclass}</td>
                <td>{stabledata.steacher}</td>
                <td>{stabledata.sdob}</td>
                <td>{stabledata.saddress}</td>

            </tr>

        </>
    )
}
function StudentTable({ studentdata }) {
    return (
        <div>
            <br />
            <h2>User List</h2>
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
                        <Stable key={stabledata.id} stabledata={stabledata} />

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable