import React, { useState } from 'react'

function Create() {
    const [name, setname] = useState(' ')
    const [email, setemail] = useState(' ')
    const [password, setpassword] = useState(' ')
    
    // const addname = (e) => {
    //     const namevalue = (e.target.value);
    //     setname(namevalue)
    // }
    const addemail = (e) => {
        setemail(e.target.value);
    }
    const addpassword = (e) => {
        setpassword(e.target.value);
    }
    const handlesubmit = () => {
        
        setname(v.innerhtml)
        console.log(email)
    }
    return (
        <div>
            <label>Name</label>
            <input type='text' value={name} />
            <label>Email</label>
            <input type='text' value={email} onChange={addemail} />
            <label>password</label>
            <input type='text' value={password} onChange={addpassword} />
            <button onClick={handlesubmit}>click me</button>
            <p>{name}</p>
        </div>
    )
}

export default Create