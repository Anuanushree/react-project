import React, { useState } from 'react'
import tables from './index.js'
function Create(props) {
    const[table , settable]= useState(props.tables)
    const [name, setname] = useState(' ')
    const [email, setemail] = useState(' ')
    const [password, setpassword] = useState('')
        
    const addname = (e) => {
        setname((e.target.value))
    }
    const addemail = (e) => {
        setemail(e.target.value);
    }
    const addpassword = (e) => {
        setpassword(e.target.value);
    }
    const handlesubmit = (event) => {
     event.preventDefault();
       
     let data ={
        name : name,
        email :email,
        password:password
     }
     settable(tables.conact(data))
    }
    return (
        <div>
            <form onClick={handlesubmit}>
            <label>Name</label>
                <input type='text' value={name} onChange={addname} />
            <label>Email</label>
            <input type='text' value={email} onChange={addemail} />
            <label>password</label>
            <input type='text' value={password} onChange={addpassword} />
            <button type='submit'>click me</button>
            </form>
            <div><span>{name}</span><span>{email}</span>
            <password>{password}</password></div>
            <div>{table}</div>
        </div>
    )
}

export default Create