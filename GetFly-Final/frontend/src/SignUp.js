import React, { useState } from "react";
import logo from "./images/logo.png";
import "./styles/SignUp.css";
import { useNavigate, NavLink } from 'react-router-dom';
import Validation from "./components/SignUpValidation"
import axios from 'axios'

function SignUp() {
    const [isShown, setIsSHown] = useState(false);
    const [isShown1, setIsSHown1] = useState(false);

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    const togglePassword1 = () => {
        setIsSHown1((isShown) => !isShown1);
    };

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: 0,
        password: '',
        confirm_pass: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))

        if (errors.name == "" && errors.email == "" && errors.phone == "" && errors.password == "" && errors.confirm_pass == "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/login')
                })
                .catch(err => console.log(err));

        }
    }
    return (
        <>
            <div class={`container `} >
                <div class="signup-form">
                    <div class="container1">
                        <img src={logo} class="img-fluid" alt="logo" />
                    </div>
                    <div class="container3">
                        <div class="d-flex" style={{ height: 400 }}>
                            <div class="vr"></div>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="col">
                            <h1 className="text-center">SIGN UP</h1>
                            <p className="">
                                Welcome to GetFly technologies. Please Login into your account
                            </p>

                            <form className="request-form" action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" class="form-label">
                                        Name <span className="req">*</span>
                                    </label>
                                    <input
                                        name='name'
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Sam Joseph"
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.name && <span className="text-danger">{errors.name}</span>}
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        College Id <span className="req">*</span>
                                    </label>
                                    <input
                                        name='email'
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput2"
                                        placeholder="id@pvppcoe.ac.in"
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Contact Number <span className="req">*</span>
                                    </label>
                                    <input
                                        name="phone"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput3"
                                        placeholder="12345678"
                                        onChange={handleInput}
                                        required
                                    />
                                    {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                </div>

                                <div className="mb-3">
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
                                        required
                                    />
                                    <div className="checkbox-container d-flex">
                                        <label htmlFor="checkbox">Show password?</label>
                                        <input
                                            id="checkbox"
                                            type="checkbox"
                                            checked={isShown}
                                            onChange={togglePassword}
                                        />
                                    </div>
                                    {errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm_pass" className="form-label">
                                        Confirm Password <span className="req">*</span>
                                    </label>
                                    <input
                                        type={isShown1 ? "text" : "password"}
                                        id="inputPassword6"
                                        name='confirm_pass'
                                        className="form-control"
                                        aria-labelledby="passwordHelpBlock"
                                        placeholder="confirm password"
                                        value={values.confirm_pass}
                                        onChange={handleInput}
                                        required
                                    />
                                    <div className="checkbox-container d-flex">
                                        <label htmlFor="checkbox">Show password?</label>
                                        <input

                                            id="checkbox"
                                            type="checkbox"
                                            checked={isShown1}
                                            onChange={togglePassword1}
                                        />
                                    </div>
                                    {errors.confirm_pass && <span className="text-danger">{errors.confirm_pass}</span>}
                                </div>

                                <button type='submit' id="btn" className="btn d-grid gap-2 col-4 mx-auto">SIGN UP</button>
                                <NavLink to="/Login" className="footer d-grid gap-2 col-6 mx-auto">Already have an account? Login</NavLink>
                                <div className="footer d-grid gap-2 col-6 mx-auto">
                                    <p>www.getflytechnologies.com</p>

                                </div>


                            </form>

                        </div>



                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUp;