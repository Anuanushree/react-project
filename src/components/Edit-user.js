import React, { useState } from 'react'

function Update({ array, selectvalue,setArray }) {
  const findvalue = array.find((n) => n.id === Number(selectvalue))
  console.log(selectvalue)

  const handledelete=(event)=>{
    event.preventDefault();
    
    const newuser= array.filter((items,index)=>index !== selectvalue);
    setArray(newuser)

    // findvalue.id='';
    findvalue.name='';
    findvalue.email='';
    console.log(newuser)
  }
  return (
    <>

<div>
<h2>Create -user</h2>
<br />
<div className='container'>
<form  className='form'>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label"> Name</label>
    <div className="col-sm-10">
      <input value={findvalue.name} className="form-control"
        />
    </div>
  </div>
  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input value={findvalue.email} className="form-control"
      />
    </div>
  </div>

  <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input value={findvalue.password} className="form-control"
        />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Phone Number</label>
    <div className="col-sm-10">
      <input value={findvalue.phn} className="form-control"
        />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">About youself</label>
    <div className="col-sm-10">
      <textarea name="txtMsg" id="textbox" className="form-control" 
        value={findvalue.textarea}></textarea>
    </div>
  </div>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  
    <button className=' btn btn-primary'>updated clicked</button>
    <button className='btn btn-danger' onClick={handledelete}>Deleted</button>
  </div>



    </form>
  </div>
</div>
    </>
  )
}
function Edit({ array ,setArray}) {
  const [selectvalue, setselectvalue] = useState('')

  let handleEdit = (event) => {
    setselectvalue(event.target.value)
  }
  return (
    <>
    <br/>
      <label>Select the id  </label>
      <select  onChange={handleEdit} value={selectvalue}>
        
        <option className="dropdown-item">--select--</option>
        {array.map((data) =>

          <option className="dropdown-item" key={data.id}>{data.id}</option>
        )}
        
      </select>
      {selectvalue && <Update array={array} selectvalue={selectvalue} setArray={setArray} />}
    </>
  )
}


export default Edit