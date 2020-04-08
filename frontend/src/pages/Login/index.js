import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Login() {
    return(
        <div className="login-container">

            <section className="form">
                <img src={logoImg} alt="Melskin" />
                <form>
                    <h1>Start session</h1>
                    <input placeholder="Email" id="email-input" />
                    <input placeholder="Password" id="pass-input" type="password" />
                    <button type="submit" id="signin-butt">Sign in</button>
                    <Link to="/pass-reset" id="forgot">
                        Forgot password?
                    </Link>
                    <Link to="/register" id="create">
                        <FiLogIn size={16} color="#FF802E" />
                        Create an account
                    </Link>
                </form>
            </section>
    
            <div className="phraseA">
                SKIN CANCER AWARENESS
            </div>
            <div className="phraseB">
                A MODERN SOLUTION FOR MELANOMA TRACKING
            </div>

        </div>
    );
}