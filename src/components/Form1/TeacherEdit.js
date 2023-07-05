import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function TeacherEdit({ array, setArray }) {
   const navigate = useNavigate();
    const [name, setName] = useState('');
    const [tclass, settclass] = useState('');
    const [subject, setsubject] = useState('');
    const [phn, setphn] = useState('');
    const [experience, setexperience] = useState('');

    const selectedId = localStorage.getItem('selected')

    useEffect(() => {
        const findValue = array.find((n) => n.id == selectedId);
        if (findValue) {
            console.log(findValue)
            setName(findValue.name);
            settclass(findValue.tclass);
            setsubject(findValue.subject);
            setphn(findValue.phn);
            setexperience(findValue.experience);
        }
    }, []);

    let handlesubmit = (event) => {
        event.preventDefault();

        let object = {
            id: selectedId,
            name: name,
            tclass: tclass,
            subject: subject,
            phn: phn,
            experience: experience,
        }
        let changevalue = [...array];

        for (var i = 0; i < changevalue.length; i++) {
            if (changevalue[i].id == selectedId) {
                break;
            }
        }
        changevalue[i] = object;
        setArray([...changevalue]);
        setName('');
        settclass('');
        setphn('');
        setsubject('');
        setexperience('');
        navigate('/TeacherData');

    }

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
                                <input value={name} className="form-control"
                                    onChange={(event) => setName(event.target.value)} placeholder="Your name...." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Class</label>
                            <div className="col-sm-10">
                                <input value={tclass} className="form-control"
                                    onChange={(event) => settclass(event.target.value)} placeholder="Your class...." />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">subject</label>
                            <div className="col-sm-10">
                                <input value={subject} className="form-control"
                                    onChange={(event) => setsubject(event.target.value)} placeholder="Your subject..." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input value={phn} className="form-control"
                                    onChange={(event) => setphn(event.target.value)} placeholder="Your phone number..." />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Experience</label>
                            <div className="col-sm-10">
                                <input value={experience} className="form-control"
                                    onChange={(event) => setexperience(event.target.value)} placeholder="Your Experience..." />
                            </div>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className=' btn btn-success btn-lg'>Update</button>
                        </div><br />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeacherEdit;