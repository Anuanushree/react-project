import React, { useEffect, useState } from 'react';
import Delete from './Delete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit({ array, setArray }) {
  const [selectvalue, setselectvalue] = useState('')
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phn, setphn] = useState('');
  const [textarea, settextarea] = useState('');
  const navigator = useNavigate();
  useEffect(() => {
    const findvalue = array.find((n) => n.id === Number(selectvalue));
    console.log(findvalue)
    if (findvalue) {
      setName(findvalue.name)
      setemail(findvalue.email)
      setpassword(findvalue.password)
      setphn(findvalue.phn);
      settextarea(findvalue.textarea);
    }
  }, [selectvalue])

  let handleEdit = (event) => {
    setselectvalue(event.target.value)
  }
  const handlesubmit = async (event) => {
    event.preventDefault();
    let finds = array.find(n => n.id === Number(selectvalue))

    try {
      await axios.put(`https://crud-kb35.onrender.com/user/${finds._id}`, {
        ...array, name, email, password, phn, textarea
      });

    } catch (error) {
      console.error('Error updating note:', error);
    }
    navigator('/list')
  }
  return (
    <>
      <br />
      <h2 className='text-center' id='headingtag1'>Edit-user</h2>
      <label>Select the id  </label>
      <select onChange={handleEdit} id='dropdown' value={selectvalue}>


        <option className="dropdown-item">--select--</option>
        {array.map((data) =>

          <option className="dropdown-item" key={data.id}>{data.id}</option>
        )}

      </select>
      {selectvalue && (
        <div>
          <div id='bg'>
            <br />
            <div className='container'>
              <form className='form'>
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label"> Name</label>
                  <div className="col-sm-10">
                    <input value={name} className="form-control"
                      onChange={(event) => setName(event.target.value)} placeholder="Your name...." />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input value={email} className="form-control"
                      onChange={(event) => setemail(event.target.value)} placeholder="Your email...." />
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input value={password} className="form-control"
                      onChange={(event) => setpassword(event.target.value)} placeholder="Your password..." />
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
                  <label className="col-sm-2 col-form-label">About youself</label>
                  <div className="col-sm-10">
                    <textarea name="txtMsg" id="textbox" className="form-control" placeholder="Your Message...."
                      onChange={(event) => settextarea(event.target.value)} value={textarea}  ></textarea>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button onClick={handlesubmit} className=' btn btn-success btn-lg'>Save</button>
                  <Delete setselectvalue={setselectvalue} array={array} selectvalue={selectvalue} setArray={setArray} />
                </div><br />

              </form>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}


export default Edit;