import React, { useState, useEffect } from 'react'

function StudentEdit({ studentdata, setStudentdata,array }) {
    const [sname, setsname] = useState('');
    const [sfathername, setsfathername] = useState('');
    const [sclass, setsclass] = useState('');
    const [steacher, setsteacher] = useState('');
    const [sdob, setsdob] = useState('');
    const [saddress, setsaddress] = useState('');

    const dropdownmenu = {
        width: "100%",
        height: '40px',
    }
    const id = localStorage.getItem('id')
    useEffect(() => {
        const findValue = studentdata.find((n) => n.id == id)
        console.log(findValue)
        if (findValue) {
            setsname(findValue.sname);
            setsclass(findValue.sclass);
            setsfathername(findValue.sfathername);
            setsteacher(findValue.steacher);
            setsdob(findValue.sdob);
            setsaddress(findValue.saddress);
        }
    }, [])

const handleupdate=(event)=>{
    event.preventDefault();

    const studentobject = {
        id: id,
        sname: sname,
        sfathername: sfathername,
        sclass: sclass,
        sdob: sdob,
        steacher: steacher,
        saddress: saddress,
    }

    let changevalue = [...studentdata];

    for (var i = 0; i < changevalue.length; i++) {
        if (changevalue[i].id == id) {
            break;
        }
    }
    changevalue[i] = studentobject;
    setStudentdata([...changevalue]);

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
    <h2>Create -user</h2>
    <br /><div id='bg'><br />
        <div className='container'>
            <form className='form' onSubmit={handleupdate}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Student Name</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            value={sname} onChange={(event) => setsname(event.target.value)} placeholder="Your name...." />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Father Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={sfathername} onChange={(event) => setsfathername(event.target.value)}
                            placeholder="Your Father Name..." />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Class</label>
                    <div className="col-sm-10">
                        <input className="form-control" value={sclass} onChange={(event) => setsclass(event.target.value)}
                            placeholder="Your class...." />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Class teacher</label>
                    <div className="col-sm-10">
                        <select
                            style={dropdownmenu}
                            value={steacher}
                            onChange={(event) => setsteacher(event.target.value)}>
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
                        <input className="form-control" value={sdob} onChange={(event) => setsdob(event.target.value)}
                            placeholder="Your DOB..." />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea rows="3" className="form-control" value={saddress}
                            onChange={event => setsaddress(event.target.value)}
                            placeholder="Your Address..." ></textarea>
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className=' btn btn-success btn-lg' >Update</button>
                </div><br />
            </form>

        </div>
    </div>
</div>

    </>
    )
}
export default StudentEdit;
