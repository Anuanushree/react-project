import React from 'react';
import { Link } from 'react-router-dom';
function Table({ tabledata, array, setArray }) {

    function setId(selected) {
        localStorage.setItem('selected', selected);
        console.log('button clicked',selected)
    }

    const deleteditems = (id) => {
        let changevalue = [...array];

        for (var i = 0; i < changevalue.length; i++) {
            if (changevalue[i].id == id) {
                break;
            }
        }
        changevalue.splice(i, 1)
        setArray([...changevalue])
    }


    return (
        <>
            <tr>
                <td >{tabledata.id}</td>
                <td>{tabledata.name}</td>
                <td>{tabledata.tclass}</td>
                <td>{tabledata.subject}</td>
                <td>{tabledata.phn}</td>
                <td>{tabledata.experience}</td>
                <td><Link to='/Teacheredit'>
                    <button className="btn btn-info"
                        onClick={(e) =>
                            setId(tabledata.id)}
                        variant="info">
                        Update</button></Link>
                    <Link >
                        <button className='btn btn-danger'
                            onClick={(e) =>
                                deleteditems(tabledata.id)}>delete</button>
                    </Link>
                </td>
            </tr>

        </>
    )
}
function List({ array, setArray }) {

    return (
        <>
            <br />
            <h2>Teacher Details</h2>
            <br />
            <table className="table table-striped table-dark table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>phone number</th>
                        <th>about yourself</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((tabledata) =>
                        <Table key={tabledata.id} array={array} setArray={setArray} tabledata={tabledata} />

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





