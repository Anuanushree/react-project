import React from 'react'

function Create({formObject,onValChange,handlesubmit}) {
    
    return (
        <div>
            <form >
            <label>Name</label>
                <input type='text' name='name' value={formObject.name} onChange={onValChange} />
            <label>Email</label>
                <input type='text' name='email' value={formObject.email} onChange={onValChange} />
            <label>password</label>
                <input type='text' name='password' value={formObject.password} onChange={onValChange} />
                <button type='submit' onClick={handlesubmit}>click me</button>
            </form>
        
        </div>
    )
}

export default Create
