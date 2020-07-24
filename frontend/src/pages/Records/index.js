import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiBarChart } from 'react-icons/fi';
import Popup from 'reactjs-popup';
import Chart from 'react-google-charts';

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
                <Link className='report-button' to="report">
                    <FiBarChart size={18} color="#fff" />
                </Link> 
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
                                <Popup
                                    trigger=
                                    {
                                        <button className="inv-butt">
                                            <li key={record.id_envio_imagem}>
                                                <strong>USER:</strong>
                                                <p>{record.nome_usuario}</p>
                                                <strong>RECORD:</strong>
                                                <p>{record.nome}</p>
                                                <strong>DESCRIPTION:</strong>
                                                <p>{record.descricao}</p>
                                                <button onClick={() => handleDeleteRecord(record.id_envio_imagem)} type="button">
                                                    <FiTrash2 size={20} color="a8a8b3" />
                                                </button>
                                            </li>
                                        </button>
                                    }
                                    modal
                                    closeOnDocumentClick
                                >
                                    <div className="analysis-container">
                                        <h3>{record.nome_usuario} - {record.timestamp_envio.toString()}</h3>
                                        <div className="graph-data">
                                            <img src={record.imagem} alt={record.id_envio_imagem} />
                                        
                                            <Chart
                                                width={'300px'}
                                                height={'300px'}
                                                chartType="PieChart"
                                                loader={<div>Loading Chart...</div>}
                                                data={[
                                                    ['Color', 'Count'],
                                                    ...record.cores.split(',').map((color, index) => [color.toString(), 1]),
                                                ]}
                                                options={{
                                                    title: 'Main Colors',
                                                    titleTextStyle: {
                                                        color: '#41414d',
                                                        fontName: 'Roboto',
                                                        fontSize: 16,
                                                        bold: true,
                                                        italic: false,
                                                    },
                                                    fontName: "Roboto",
                                                    pieSliceText: "none",
                                                    tooltip: {
                                                        showColorCode: true,
                                                        text: 'none',
                                                    },
                                                    slices: [...record.cores.split(',').map(paint => ({ color: paint.toString() }))],
                                                    legend: { position: 'none' },
                                                    pieHole: 0.4,
                                                }}
                                                rootProps={{ 'data-testid': '3' }}
                                            />
                                        </div>
                                        <strong>Melanoma Risk:</strong>
                                        <p>{Math.round(record.risco * 100)}%</p>
                                        <strong>Asymmetry:</strong>
                                        <p>{Math.round((record.assimetria > 1 ? 1 : record.assimetria) * 100)}%</p>
                                    </div>
                                </Popup>
                            ))
                        ) :
                        (
                            records.map(record => (
                                <Popup
                                    trigger=
                                    {
                                        <button className="inv-butt">
                                            <li key={record.id_envio_imagem}>
                                                <strong>RECORD:</strong>
                                                <p>{record.nome}</p>
                                                <strong>DESCRIPTION:</strong>
                                                <p>{record.descricao}</p>
                                                <button onClick={() => handleDeleteRecord(record.id_envio_imagem)} type="button">
                                                    <FiTrash2 size={20} color="a8a8b3" />
                                                </button>
                                            </li>
                                        </button>
                                    }
                                    modal
                                    closeOnDocumentClick
                                >
                                    <span>Meter um IF aqui pra caso tenha o dado, mostrar</span><br />
                                    <span>Meter um IF aqui pra caso tenha o dado, mostrar</span><br />
                                    <span>Envio de número {record.id_envio_imagem}</span><br />
                                    <span>Meter um IF aqui pra caso tenha o dado, mostrar</span><br />
                                    <span>Meter um IF aqui pra caso tenha o dado, mostrar</span><br />
                                </Popup>
                            ))
                        )

                }
            </ul>
        </div>
    );
}