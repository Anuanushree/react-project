import React, { useEffect, useRef, useState } from 'react'
// import StudentTable from './StudentTable';
function Update({ array, studentdata, setStudentdata }) {

  const [sname, setsname] = useState('');
  const [sfathername, setsfathername] = useState('');
  const [sclass, setsclass] = useState('');
  const [steacher, setsteacher] = useState('');
  const [sdob, setsdob] = useState('');
  const [saddress, setsaddress] = useState('');

  const inputref = useRef(null);
  const dropdownmenu = {
    width: "100%",
    height: '40px',
  }
  useEffect(() => {
    inputref.current.focus()
  }, [])

  let addStudentName = (event) => {
    setsname(event.target.value);
  }
  let addStudentclass = (event) => {
    setsclass(event.target.value);
  }
  let addStudentFatherName = (event) => {
    setsfathername(event.target.value);
  }

  let addStudentteacher = (event) => {
    setsteacher(event.target.value);
  }

  let addStudentAddress = (event) => {
    setsaddress(event.target.value);
  }

  let addStudentdob = (event) => {
    setsdob(event.target.value);
  }
  const sumbitStudentdata = (event) => {
    event.preventDefault();

    const studentobject = {
      id: studentdata.length + 1,
      sname: sname,
      sfathername: sfathername,
      sclass: sclass,
      sdob: sdob,
      steacher: steacher,
      saddress: saddress,
    }
    setStudentdata(studentdata.concat(studentobject));
    setsname('');
    setsfathername('');
    setsclass('');
    setsdob('');
    setsteacher('');
    setsaddress('');
    console.log(studentdata)

  }

  return (
    <>

      <div><br />
        <h2>Student Form</h2>
        <br />
        <div id='bg'>
          <br />
          <div className='container'>
            <form className='form'  onSubmit={sumbitStudentdata}>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Student Name</label>
                <div className="col-sm-10">
                  <input className="form-control" ref={inputref}
                    value={sname} onChange={addStudentName} placeholder="Your name...." />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Father Name</label>
                <div className="col-sm-10">
                  <input className="form-control" value={sfathername} onChange={addStudentFatherName}
                    placeholder="Your Father Name..." />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Class</label>
                <div className="col-sm-10">
                  <input className="form-control" value={sclass} onChange={addStudentclass}
                    placeholder="Your class...." />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Class teacher</label>
                <div className="col-sm-10">
                  <select
                    style={dropdownmenu}
                    value={steacher}
                    onChange={addStudentteacher}>
                    <option className='text-center' >---  Select your class teacher  ---</option>
                    {array.map((teacher) =>
                      <option key={teacher.id} className="dropdown-item" >{teacher.name}</option>
                    )}

                  </select>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Date of birth</label>
                <div className="col-sm-10">
                  <input className="form-control" value={sdob} onChange={addStudentdob}
                    placeholder="Your DOB..." />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                  <textarea rows="3" className="form-control" value={saddress} onChange={addStudentAddress}
                    placeholder="Your Address..." ></textarea>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className=' btn btn-success btn-lg' >Save</button>
              </div><br />
            </form>

          </div>
        </div>
      </div>

    </>

  )
}



export default Update;