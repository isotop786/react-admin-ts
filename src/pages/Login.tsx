import React from 'react';
import { useFormik } from 'formik';
import '../Login.css'
import axios from 'axios';


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
        if(values.email !=='' && values.password !=='')
        {
            // alert(JSON.stringify(values, null, 2));
            axios.post('https://nestadmin.onrender.com/api/login',{
                email: values.email,
                password: values.password
            },{withCredentials: true})
            .then((res)=>{
                alert('Login success')
            })
            .catch(err=>{
                alert(err.response.data.message)
            })
        }
        else{
            alert('Email and passwor can not be empty')
        }
    },
  });
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <form className="form-signin" onSubmit={formik.handleSubmit}>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="form-control" placeholder="Email address"
                    required
                />
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="form-control" placeholder="Password"
                />

                <button className='btn btn-primary my-4' type="submit">Submit</button>
            </form>
            </div>
        </div>
    </div>
   
  );
};

export default Login;

