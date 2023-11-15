import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import './signUp.css';


function SignUp() {
    const [userType, setUserType] = useState('recruit');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <div>

            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card border border-2 border-black rounded-0 text-center ">
                            <div className="card-body">
                                <div className='card-title my-5 title-card'>
                                    Sign Up As
                                </div>
                                <form className='mx-auto w-75'>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label ">
                                            Username
                                        </label>
                                        <input type="username" className="form-control rounded-0 bg-secondary-subtle" id="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control rounded-0 bg-secondary-subtle" id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control rounded-0 bg-secondary-subtle"
                                            id="confirmPassword"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check mx-2">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    id="recruit"
                                                    value="recruit"
                                                    checked={userType === 'recruit'}
                                                    onChange={handleUserTypeChange}
                                                />
                                                <label className="form-check-label" htmlFor="recruit">
                                                    Recruit
                                                </label>
                                            </div>
                                            <div className="form-check mx-2">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    id="recruiter"
                                                    value="recruiter"
                                                    checked={userType === 'recruiter'}
                                                    onChange={handleUserTypeChange}
                                                />
                                                <label className="form-check-label" htmlFor="recruiter">
                                                    Recruiter
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-dark w-75 p-3">
                                        Sign Up
                                    </button>

                                    <Link to="/header">
                                        <button className="btn btn-outline-secondary w-75 mt-3 p-3">
                                            Log In
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
