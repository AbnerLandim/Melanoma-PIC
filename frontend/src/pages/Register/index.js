import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import Phrase from '../../assets/impact-register.svg';

export default function Register() {
    return (
        <div className="box-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Melskin" />
                    <h1>Sign up</h1>
                    <img src={Phrase} alt="" id="phrase" />
                    <Link className="back-link" to="/login">
                        <FiArrowLeft size={16} color="#FF802E" />
                        Back to login page
                    </Link>
                </section>
                <form>
                    <input placeholder="Name" required/>
                    <input placeholder="Last name" required/>
                    <input placeholder="Document number" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <select id="gender">
                        <option value="True">Male</option>
                        <option value="False">Female</option>
                    </select>
                    <input type="date" placeholder="Date of birth" required/>
                    <input placeholder="Phone number" pattern="[0-9]" required/>
                    <input placeholder="Country" required/>
                    <div className="input-group">
                        <input placeholder="State" id="state-input" maxLength="2" style={{ width: 100 }} required/>
                        <input placeholder="City" id="city-input" required/>
                    </div>
                    <button type="submit" className="button">Create account</button>
                </form>
            </div>
        </div>
    );
}