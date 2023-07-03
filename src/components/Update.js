import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
 
function Update({ library, setLibrary }) {

    const id = localStorage.getItem('id');
    const findValue = library.find((n) => n.id == id)

    const navigate = useNavigate();
    function HandleDelete() {
        const navigate = useNavigate;
        for (var i = 0; i < library.length; i++) {
            if (library[i].id == id) {
                break;
            }
        }
        library.splice(i, 1);
        console.log('deleted')
    }
    const formik = useFormik({
        initialValues: {

            Name: findValue.Name,
            bookName: findValue.bookName,
            location: findValue.location

        },
        validate: (values) => {
            const errors = {};
            if (!values.Name) {
                errors.Name = '* FILL THE DETAILS *';
            }
            if (!values.bookName) {
                errors.bookName = '* FILL THE DETAILS *';
            }

            if (!values.location) {
                errors.location = '* FILL THE DETAILS *';
            }
            return errors;
        },
        onSubmit: (values) => {

            const object = {
                id: id,
                bookName: values.bookName,
                Name: values.Name,
                location: values.location,
                date:findValue.date

            }
            let changevalue = [...library];

            for (var i = 0; i < changevalue.length; i++) {
                if (changevalue[i].id == id) {
                    break;
                }
            }
            changevalue[i] = object;
            setLibrary([...changevalue]);
            navigate('/')
        }
    })

    return (
        <div className='container text-center form-design'>
            <form onSubmit={formik.handleSubmit} >
                <h2>Update Form</h2><br/>
                <label>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                <input name="Name"
                    id="Name"
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                />
                <div className='pl-5' >{formik.errors.Name}</div>
                <br />
                <label  >Book Name &nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;
                <input name="bookName"
                    id="bookName"
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.bookName}
                />
                <div className='pl-5' >{formik.errors.bookName}</div>
                <br />
                <label>Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label> &nbsp;&nbsp;&nbsp;&nbsp;

                <input name="location"
                    id="location"
                    type='text'

                    onChange={formik.handleChange}
                    value={formik.values.location}
                />
                <div className='pl-5'>{formik.errors.location}</div>

                <br /> <button type="submit" className='btn btn-success'>Update</button>&nbsp;&nbsp;
                <Link to='/'><button type='submit' className='btn btn-danger' onClick={() => HandleDelete()}>delete</button></Link>
            </form>
        </div>

    )
}

export default Update;