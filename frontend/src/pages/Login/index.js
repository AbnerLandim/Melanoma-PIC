import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {

            const response = await api.post('sessoes', { email, password });
            localStorage.setItem('user_email', email);
            localStorage.setItem('user_password', password);
            localStorage.setItem('user_id', response.data.id_usuario);
            localStorage.setItem('user_name', response.data.nome_usuario);
            localStorage.setItem('user_role', response.data.role_usuario);
            history.push('/');

        } catch (err) {
            alert('Login failed. Are you really yourself?');
        }

    }

    return (
        <div className="outer-container">
            <div className="login-container">

                <section>
                    <img src={logoImg} alt="Melskin" />
                    <form onSubmit={handleLogin} >
                        <h1>Start session</h1>
                        <input
                            placeholder="Email"
                            className="input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="loginButton">Sign in</button>
                        <div className="hyper-links">
                            <Link to="/pass-reset" className="redirect-link">
                                Forgot password?
                        </Link>
                            <Link to="/register" className="redirect-link">
                                <FiLogIn size={16} color="#FF802E" />
                            Create an account
                        </Link>
                        </div>

                    </form>
                </section>

                <section className="phrases">
                    <a id="text1">SKIN CANCER AWARENESS</a>
                    <a id="text2">A MODERN SOLUTION FOR MELANOMA TRACKING</a>
                </section>

            </div>
        </div>

    );
}