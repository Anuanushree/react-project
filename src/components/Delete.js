import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Delete({ array, selectvalue, setArray, setselectvalue }) {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phn, setphn] = useState('');
  const [textarea, settextarea] = useState('');

  const navigator = useNavigate();
  useEffect(() => {
    const findvalue = array.find((n) => n.id === Number(selectvalue))
    if (findvalue) {
      setName(findvalue.name)
      setemail(findvalue.email)
      setpassword(findvalue.password)
      setphn(findvalue.phn)
      settextarea(findvalue.textarea)
    }
  }, [selectvalue, array])
  const handledelete = async (event) => {
    console.log("btn clicked")
    event.preventDefault();
    let finds = array.find(n => n.id === Number(selectvalue))
    try {
      await axios.delete(`https://crud-kb35.onrender.com/user/${finds._id}`);
      setselectvalue('select option')
      setName('');
      setemail('');
      setphn('');
      setpassword('');
      settextarea('');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
    navigator('/list')
  }

  return (
    <div>
      <button onClick={handledelete} className=' btn btn-danger btn-lg'>delete</button>
    </div>
  )
}

export default Delete;