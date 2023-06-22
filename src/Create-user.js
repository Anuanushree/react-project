import {useState} from 'react'

function Create(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        // setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        // setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // setSubmitted(false);
    };

    // Handling the form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (name === '' || email === '' || password === '') {
    //         setError(true);
        // } else {
        //     setSubmitted(true);
        //     setError(false);
        // }
        // }
    // }
  return (
      <div className="form">
          <div>
              <h1>User Registration</h1>
          </div>
          <form>
           
              <label className="label">Name</label>
              <input onChange={handleName} className="input"
                  value={name} type="text" />

              <label className="label">Email</label>
              <input onChange={handleEmail} className="input"
                  value={email} type="email" />

              <label className="label">Password</label>
              <input onChange={handlePassword} className="input"
                  value={password} type="password" />

              <button className="btn"
                  type="submit">
                  Submit
              </button>
              
          </form>
      </div>
  )
  }


export default Create;