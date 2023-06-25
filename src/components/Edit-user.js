import React from 'react'

function Edit({tables}) {
    const [currentdata, setcurrentdata] = useState([])
 
    const handleEdit = (event) => {
        valid = event.value
        
    }
  return (
    <div>
        <label>search id</label>
          <form >
    
        {/* //   tables.find((table) => table.id == valid) */}
              <label>Name</label>
              <input type='text' name='name' value={table.name} onChange={onValChange} />
              <label>Email</label>
              <input type='text' name='email' value={formObject.email} onChange={onValChange} />
              <label>password</label>
              <input type='text' name='password' value={formObject.password} onChange={onValChange} />
           
              <button type='submit' onClick={handleEdit}>edit</button>
          
              </form>
    </div>
  )
}

export default Edit