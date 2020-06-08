import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png';

import api from '../../services/api';

export default function Records() {

    const [records, setRecords] = useState([]);
    const history = new useHistory();

    const user_name = localStorage.getItem('user_name');
    const user_role = localStorage.getItem('user_role');
    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        if (user_role == 1) {
            api.get('envios')
                .then(response => {
                    setRecords(response.data);
                })
        }
        else {
            api.get('envios_usuario', {
                headers: {
                    Authorization: user_id,
                }
            }).then(response => {
                setRecords(response.data);
            })
        }
    }, [user_id]);

    function handleLogout() {
        localStorage.clear();
        history.push('/login');
    }

    async function handleDeleteRecord(id) {
        try {
            await api.delete(`envios/${id}`, {
                headers: {
                    Authorization: user_id,
                }
            });

            setRecords(records.filter(record => record.id_envio_imagem !== id));
        } catch (err) {
            alert('Error deleting record. Try again.');
        }
    }

    return (
        <div className="outer-container">
            <header>
                <img src={logo} alt="Melskin" />
                <span>Welcome, {user_name}</span>
                <Link className="buttonS" to="/records/new">Add new record</Link>
                <button type="button" onClick={handleLogout} placeholder="Log out">
                    <FiPower size={18} color="#fff" />
                </button>
            </header>

            <h1>Received records</h1>

            <ul>
                {
                    user_role == 1 ?
                    (
                        records.map(record => (
                            <li key={record.id_envio_imagem}>
                                <strong>USER:</strong>
                                <p>{record.nome_usuario}</p>
                                <strong>RECORD:</strong>
                                <p>{record.nome}</p>
                                <strong>DESCRIPTION:</strong>
                                <p>{record.descricao}</p>
                                <strong>RISK:</strong>
                        <p>{record.risco}</p>
                                <button onClick={() => handleDeleteRecord(record.id_envio_imagem)} type="button">
                                    <FiTrash2 size={20} color="a8a8b3" />
                                </button>
                            </li>
                        ))
                    ):
                    (
                        records.map(record => (
                            <li key={record.id_envio_imagem}>
                                <strong>RECORD:</strong>
                                <p>{record.nome}</p>
                                <strong>DESCRIPTION:</strong>
                                <p>{record.descricao}</p>
                                <strong>RISK:</strong>
                                <p>{record.risco}</p>
                                <button type="button">
                                    <FiTrash2 size={20} color="a8a8b3" />
                                </button>
                            </li>
                        ))
                    )
                    
                }
            </ul>
        </div>
    );
}