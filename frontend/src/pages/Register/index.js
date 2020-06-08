import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import Phrase from '../../assets/impact-register.svg';

export default function Register() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [docNumber, setDocNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const history = useHistory();

    function handleRegister(e) {
        e.preventDefault();

        history
        .push(
            '/questionnaire?name='+name+
            '&lastName='+lastName+
            '&docNumber='+docNumber+
            '&email='+email+
            '&password='+password+
            '&gender='+gender+
            '&birthDate='+birthDate+
            '&phoneNumber='+phoneNumber+
            '&country='+country+
            '&state='+state+
            '&city='+city+
            '&role=1'
        ); 
    }

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
                <form onSubmit={handleRegister} >
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Last name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Document number"
                        value={docNumber}
                        onChange={e => setDocNumber(e.target.value)}
                        required
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <select
                        id="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="True">Male</option>
                        <option value="False">Female</option>
                    </select>
                    <input
                        type="date"
                        placeholder="Date of birth"
                        value={birthDate}
                        onChange={e => setBirthDate(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Phone number"
                        pattern="[0-9]*"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required
                    />
                    <div className="input-group">
                        <input
                            placeholder="State"
                            id="state-input"
                            maxLength="2"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            style={{ width: 100 }}
                            required
                        />
                        <input
                            placeholder="City"
                            id="city-input"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="button">Create account</button>
                </form>
            </div>
        </div>
    );
}