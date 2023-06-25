import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 

function Create({addname,addemail,handlesubmit,name,email,phn,textarea,password ,addpassword ,addphn,addtextarea}) {
    
 return (
    <div><br/>
        <h2>Create -user</h2>
        <br />
    <div id='bg'>
        <br />
        <div className='container'>
        <form onSubmit={handlesubmit} className='form'>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label"> Name</label>
                <div className="col-sm-10">
                <input value={name} className="form-control"
                onChange={addname} placeholder="Your name...." />
            </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input value={email} className="form-control"
                onChange={addemail} placeholder="Your email...." />
            </div>
            </div>
            
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input value={password} className="form-control"
                onChange={addpassword} placeholder="Your password..." />
            </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Phone Number</label>
                <div className="col-sm-10">
                <input value={phn} className="form-control"
                onChange={addphn} placeholder="Your phone number..." />
            </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">About youself</label>
                <div className="col-sm-10">
                <textarea name="txtMsg" id="textbox" className="form-control" placeholder="Your Message...."
                onChange={addtextarea}  value={textarea}  ></textarea>
            </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className=' btn btn-success btn-lg'>clicked</button>
            </div><br />

        </form>
        </div>
        </div>
    </div>
  )
}

export default Create
