import React from 'react';
import {useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
function Create({ library, setLibrary }) {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Name: '',
            bookName: '',
            location: '',
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
                id: library.length + 1,
                Name: values.Name,
                bookName: values.bookName,
                location: values.location,
        
                date: date,
            }
            console.log(values)
            setLibrary(library.concat(object));
            navigate('/')
        }
    })

    return (
        <div className='container text-center form-design'>
            <h2>WELCOME USER</h2>
            <br />
            <form onSubmit={formik.handleSubmit} >
                <label>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                <input name="Name"
                    id="Name"
                    type='text'
                    placeholder='Enter your name'
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                />
                <div className='pl-5 text-danger' >{formik.errors.Name}</div>
                <br />
                <label  >Book Name &nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;
                <input name="bookName"
                    id="bookName"
                    type='text'
                    placeholder='Enter your book name'
                    onChange={formik.handleChange}
                    value={formik.values.bookName}
                />
                <div className='pl-5 text-danger' >{formik.errors.bookName}</div> 
                <br />
                <label>Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</label> &nbsp;&nbsp;&nbsp;&nbsp;

                <input name="location"
                    id="location"
                    type='text'
                    placeholder='Ebter your location'
                    onChange={formik.handleChange}
                    value={formik.values.location}
                />
                <div className='pl-5 text-danger'>{formik.errors.location}</div>

                <br /> <button type="submit" className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default Create;