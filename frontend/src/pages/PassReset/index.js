import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function PassReset() {

    const history = new useHistory();

    async function handleReset(e) {
        e.preventDefault();
        try {
            //reset pass inside db
            await api.post('reset-senha', {
                user: document.getElementById('email').value
            })

        } catch (err) {
            alert('Error reseting password. Try again.');
        }

        history.push('/login');
    }
    
    return (
        <div className="outer-div">
            <div className="entries">
                <div>
                    <form onSubmit={handleReset}>
                        <img src={logo} alt="melskin" />
                        <a>We will send an e-mail containing your password.</a>
                        <input placeholder="E-mail" id="email" type="email" required />
                        <button className="send" type="submit">Send</button>

                        <Link className="login-link" to="/login">
                            <FiArrowLeft size={16} color="#FF802E" />
                            Back
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}