import React,{useState,useEffect} from 'react'

function Delete({ array, selectvalue, setArray,setselectvalue}) {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phn, setphn] = useState('');
  const [textarea, settextarea] = useState('');
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
  const handledelete = (event) => {
        console.log("btn clicked")
        event.preventDefault();
        let changevalue = [...array];

        for (var i = 0; i < changevalue.length; i++) {
            if (changevalue[i].id == selectvalue) {
                break;
            }
        }
        changevalue.splice(i, 1)
        setArray([...changevalue])
    setselectvalue('select option')
    setName('');
    setemail('');
    setphn('');
    setpassword('');
    settextarea('');
    }
  return (
    <div>
          <button onClick={handledelete} className=' btn btn-danger btn-lg'>delete</button>
    </div>
  )
  }

export default Delete;