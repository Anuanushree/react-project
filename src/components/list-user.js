import React from 'react'
function List({tables}) {
   
    return (
        <div>
           
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </div>
       
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





