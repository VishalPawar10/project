import React, { useState } from "react";
import "./styles/Login.css";
import logo from "./images/logo.png";
import { useNavigate, NavLink } from 'react-router-dom';
import Validation from "./components/LoginValidation"
import axios from 'axios'
import { useRef } from "react";


function Login() {
    
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("EmailData")

    const [isShown, setIsSHown] = useState(false);


    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))

        if(email.current.value === "test@gmail.com" && password.current.value === "Test@123"){
            localStorage.setItem("EmailData", "test@gmail.com")
            localStorage.setItem("PasswordData", "Test@123")
            navigate('/dashboard')
        }

        if (errors.email === "" && errors.password === "") {

            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    console.log(res)
                    if (res.data.result === true) {

                        localStorage.setItem('user', res.data.result)
                        // alert(localStorage.getItem('user'))
                        navigate('/home', {replace: true});
                    }
                    else {
                        alert("No record Existed");
                    }

                })
                .catch(err => console.log(err));
        }

    }


    return (
        <>
            <div className={`container`} >
                <div className="login-form">
                    <div className="container1">
                        <img src={logo} class="img-fluid" alt="logo" />
                    </div>
                    <div className="container3">
                        <div className="d-flex" style={{ height: 400 }}>
                            <div className="vr"></div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="col">
                            <h1 className="text-center">LOGIN</h1>
                            <p className="">
                                Welcome to GetFly technologies. Please Login into your account
                            </p>
                            <form className="request-form" action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        College Id <span className="req">*</span>
                                    </label>

                                    <input
                                        name='email'
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="id@pvppcoe.ac.in"
                                        onChange={handleInput}
                                        ref={email}
                                        required
                                    />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <label htmlFor="password" className="form-label">
                                    Password <span className="req">*</span>
                                </label>

                                <input

                                    type={isShown ? "text" : "password"}
                                    id="inputPassword5"
                                    name='password'
                                    className="form-control"
                                    aria-labelledby="passwordHelpBlock"
                                    placeholder="password"
                                    onChange={handleInput}
                                    ref={password}
                                    required
                                />

                                {errors.password && <span className="text-danger">{errors.password}</span>}

                                <button type="submit" id="btn" class="btn d-grid gap-2 col-4 mx-auto">LOGIN</button>
                                <NavLink to="/signup" className=" footer d-grid gap-2 col-6 mx-auto">Don't have an account? Signup</NavLink>
                                <div class=" footer d-grid gap-2 col-6 mx-auto">
                                    <p>www.getflytechnologies.com</p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Login;