import React,{useState,useEffect} from 'react';
import { useFormik } from 'formik';
import '../Login.css'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


const Login = () => {

    const [isError,setError] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isDelay,setDelay] = useState(false);
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
        if(values.email !=='' && values.password !=='')
        {
            setSubmitted(true)
            setTimeout(()=>{
                setDelay(true)
            },5500)
            // alert(JSON.stringify(values, null, 2));
            axios.post('https://nestadmin.onrender.com/api/login',{
                email: values.email,
                password: values.password
            },{withCredentials: true})
            .then((res)=>{
                // alert('Login success')
                localStorage.setItem('auth_token',res.data.token)
                setSubmitted(false)
                navigate("/")

            })
            .catch(err=>{
                alert(err.response.data.message)
                console.log(err.message)
                console.log(err.response.data.message)
                setError(true);
                setErrMsg(err.response.data.message)
                setSubmitted(false)
               
                // alert(err.response.data.message)
            })

            setError(false)
            setErrMsg('')
           
        }
        else{
            alert('Email and passwor can not be empty')
        }
    },
  });
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12" style={{maxWidth:"1100px"}}>
            <form className="form-signin" onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
            {isError && (
                        <div className="">
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> {errMsg}.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    )}
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

                
                {!isSubmitted ?(
                        <button className='btn btn-primary my-4' type="submit">Submit</button>
                    ) :(
                        <>
                        <button className="btn btn-primary mt-3 " type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span style={{marginLeft:".5rem"}} role="status">Login...</span>
                        </button>
                        {isDelay && (<p>Sorry, it is taking longer for the backend wake up, <br/>it's been deployed in a free service of "Render".<br/>Please be patient, thank you:).</p>)}
                        </>
                    )}
                <p className="mt-5 mb-3 text-muted">Don't have account? <Link to="/register">Register</Link> here</p>
                <p className="mt-5 mb-3 text-muted">&copy; MERN Admin Dashboard</p>
            </form>
            </div>
        </div>
    </div>
   
  );
};

export default Login;

