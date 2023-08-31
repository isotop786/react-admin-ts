
import React,{useEffect,useState} from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import '../Login.css'

const Register = () => {
  
    const [isError,setError] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      password_confirm:'',
    },

    onSubmit: values => {
        if(values.password === values.password_confirm)
        {
            setSubmitted(true)
            // alert(JSON.stringify(values, null, 2));
            axios.post('https://nestadmin.onrender.com/api/register',{
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: values.password,
                password_confirm: values.password_confirm
            })
            .then((res)=>{
                alert('register success!')
                setSuccess(true)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err.message)
                console.log(err.response.data.message)
                setError(true);
                setErrMsg(err.response.data.message)
                alert(err.response.data.message)
            })
        }
        else{
            alert('Passowrd did not matched')
        }
    },
  });
  return (
    <div className="container">

        <>
            {!isSuccess ? (
                <div className='row'>
                <div className="col-md-12">
                <form className="form-signin" onSubmit={formik.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
                    {isError && (
                        <div className="">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> {errMsg}.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    )}
                  
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className="form-control" placeholder="First Name" required
                    />
                    
    
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className="form-control" placeholder="Last Name" required
                    />
    
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control" placeholder="Email" required
                    />
    
                    <label htmlFor="email" className="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="form-control" placeholder="Password" required
                    />
    
                    <label htmlFor="email" className="sr-only">Confirm Password</label>
                    <input
                        id="password_confirm"
                        name="password_confirm"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password_confirm}
                        className="form-control" placeholder="Confirm Password" required
                    />
                    {!isSubmitted ?(
                        <button className='btn btn-primary mt-2' type="submit">Submit</button>
                    ) :(
                        <button className="btn btn-primary mt-3 " type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span style={{marginLeft:".5rem"}} role="status">Registering...</span>
                        </button>
                    )}
                    
                    <p className="mt-5 mb-3 text-muted">Already have account? <Link to="/login">Login</Link> here</p>
                    <p className="mt-5 mb-3 text-muted">&copy; MERN Admin Dashboard</p>
                    </form>
                </div>
                </div>
            ) : (
                <div className='row justify-content-center pt-4 mt-4'>
                    <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <div className="card card-default p-3">
                                <div className="card-body text-center">
                                    <h2 className='text-success'>Registration Success </h2>
                                    <p><Link to={"/login"}>Login</Link> here</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
            )}
            
        </>
    </div>
  );
};

export default Register;




// import React,{useState,} from 'react'
// import '../Login.css'
// import { Link } from 'react-router-dom'
// import { useFormik } from 'formik';


// const Register:React.FC = () => {
//   return (
//     <div className="container">
//         <div className="row">
            
//             <div className="col-md-8">
//             <div className="">
//                 <form className="form-signin">
//                 <h1 className="h3 mb-3 font-weight-normal">Registration Form</h1>
                
//                 <label htmlFor="firstName" className="sr-only">First Name</label>
//                 <input type="text" id="firstName" className="form-control" placeholder="First Name" required />
                
//                 <label htmlFor="firstName" className="sr-only">Last Name</label>
//                 <input type="text" id="inpufirstNametEmail" className="form-control" placeholder="Last Name" required />
                
//                 <label htmlFor="inputEmail" className="sr-only">Email address</label>
//                 <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                
//                 <label htmlFor="inputPassword" className="sr-only">Password</label>
//                 <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                
//                 <label htmlFor="inputPasswordConfirm" className="sr-only">Password Confirm</label>
//                 <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Password Confirm" required/>

//                 <button className="btn btn-primary btn-block mt-4" type="submit">Register</button>
//                 <p className="mt-5 mb-3 text-muted">Already have account? <Link to="/login">Login</Link> here</p>
//                 <p className="mt-5 mb-3 text-muted">&copy; MERN Admin Dashboard</p>
//                 </form>
//                 </div>
//             </div>
            
//         </div>
//     </div>

     
//   )
// }

// export default Register