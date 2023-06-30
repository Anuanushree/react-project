import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
function Create({ library, setLibrary }) {
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const objects = {
    //         id: library.length + 1,
    //         bookName: bookName,
    //         author: author,
    //         year: year
    //     }
    //     setLibrary(library.concat(objects))
    //     setAuthor('');
    //     setBookName('');
    //     setYear('');
    // }

    // const validate = 
    const formik = useFormik({
        initialValues: {
            bookName: '',
            author: '',
            year: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.bookName) {
                errors.bookName = 'Required*';
            } else if (values.bookName.length > 15) {
                errors.bookName = 'Must be 15 characters or less';
            }
            if (!values.author) {
                errors.author = 'Required*';
            } else if (values.author.length > 15) {
                errors.author = 'Must be 15 characters or less';
            }

            if (!values.year) {
                errors.year = 'Required*';
            }
            else if (values.year.length != 4) {
                errors.year = 'INVALID YEAR';
            }
            return errors;
        },
        onSubmit: (values) => {
            setAuthor(values.author)
            setBookName(values.bookName)
            setYear(values.year)
            const object = {
                id: library.length + 1,
                bookName: bookName,
                author: author,
                year: year
            }
            setLibrary(library.concat(object))
        }
    })

    return (

        <form onSubmit={formik.handleSubmit} >
            <label>Book Name</label>
            <input name="bookName"
                id="bookName"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.bookName}
            />
            {formik.errors.bookName ? <div>{formik.errors.bookName}</div> : null}
            <br />
            <label>Author</label>
            <input name="author"
                id="author"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.author}
            />
            {formik.errors.author ? <div>{formik.errors.author}</div> : null}
            <label>Year</label>
            <input name="year"
                id="year"
                type='text'
                onChange={formik.handleChange}
                value={formik.values.year}
            />
            {formik.errors.year ? <div>{formik.errors.year}</div> : null}

            <br /> <button type="submit">Submit</button>
        </form>

    )
}

export default Create;