import React from 'react'

function Delete({ array, selectvalue, setArray }) {
    const handledelete = (event) => {
        console.log("btn clicked")
        event.preventDefault();
        let changevalue = [...array];

        for (var i = 0; i < changevalue.length; i++) {
            if (changevalue[i].id == selectvalue) {
                break;
            }
        }
        changevalue.splice(i, 1)
        setArray([...changevalue])
    }
  return (
    <div>
          <button onClick={handledelete} className=' btn btn-danger btn-lg'>delete</button>
    </div>
  )
  }

export default Delete;