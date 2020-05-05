import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png';

export default function Sendings() {

    return(
        <div className="outer-container">
            <header>
                <img src={logo} alt="Melskin" />
                <span>Welcome, username</span>
                <Link className="buttonS" to="/records/new">Add new record</Link>
                <button type="button" placeholder="Log out">
                    <FiPower size={18} color="#fff" />
                </button>
            </header>

            <h1>Received records</h1>

            <ul>
                <li>
                    <strong>RECORD:</strong>
                    <p>Record test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>Decription test</p>
                    <strong>RISK:</strong>
                    <p>60%</p>
                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>RECORD:</strong>
                    <p>Record test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>Decription test</p>
                    <strong>RISK:</strong>
                    <p>60%</p>
                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>RECORD:</strong>
                    <p>Record test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>Decription test</p>
                    <strong>RISK:</strong>
                    <p>60%</p>
                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>RECORD:</strong>
                    <p>Record test</p>
                    <strong>DESCRIPTION:</strong>
                    <p>Decription test</p>
                    <strong>RISK:</strong>
                    <p>60%</p>
                    <button type="button">
                        <FiTrash2 size={20} color="a8a8b3" />
                    </button>
                </li>
                
            </ul>
        </div>
    );
}