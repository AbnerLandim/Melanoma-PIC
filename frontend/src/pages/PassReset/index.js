import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

export default function PassReset() {

    return (
        <div className="outer-div">
            <div className="entries">
                <div className="inner-div">
                    <img src={logo} alt="melskin" />
                    <a>We will send an e-mail containing your password.</a>
                    <input placeholder="E-mail" type="email" required />
                    <button className="send">Send</button>
                    <button className="back">Back</button>
                    <Link className="back-link" to="/login">
                        
                    </Link>
                </div>
            </div>
        </div>
    );

}