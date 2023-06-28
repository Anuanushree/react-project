import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Create({ addname, addtclass, handlesubmit, name, tclass, phn, experience, subject, addsubject, addphn, addexperience }) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div><br />
            <h2>Teacher Form</h2>
            <br />
            <div id='bg'>
                <br />
                <div className='container'>
                    <form onSubmit={handlesubmit} className='form'>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Teacher Name</label>
                            <div className="col-sm-10">
                                <input value={name} ref={inputRef} className="form-control"
                                    onChange={addname} placeholder="Your name...." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Class</label>
                            <div className="col-sm-10">
                                <input value={tclass} className="form-control"
                                    onChange={addtclass} placeholder="Your class...." />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">subject</label>
                            <div className="col-sm-10">
                                <input value={subject} className="form-control"
                                    onChange={addsubject} placeholder="Your subject..." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input value={phn} className="form-control"
                                    onChange={addphn} placeholder="Your phone number..." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Experience</label>
                            <div className="col-sm-10">
                                <input value={experience} className="form-control"
                                    onChange={addexperience} placeholder="Your Experience..." />
                            </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className=' btn btn-success btn-lg'>Save</button>
                        </div><br />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
