import React from 'react';
import farm from './images/farmer.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import './css/farmer.css';


function Farmer()
{
    return(
        <div>
            <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={farm} alt="sign up image"/></figure>
                        <Link className="signup-image-link" to="/SignupFarmer">Create an account</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label><i className="fas fa-user"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label><i className="fas fa-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>

        </div>
    );
}

export default Farmer;