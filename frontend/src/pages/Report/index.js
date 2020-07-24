import React, { useState, useEffect } from 'react';
import './styles.css'
import api from '../../services/api';
import Chart from 'react-google-charts';
import logo from '../../assets/logo.png';
import moment from 'moment';

export default function Report() {

    moment().format();
    const [records, setRecords] = useState([]);
    const [plotRecords, setPlotRecords] = useState([]);
    const [plotUsers, setPlotUsers] = useState([]);

    const user_name = localStorage.getItem('user_name');
    const user_role = localStorage.getItem('user_role');
    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        if (user_role == 1) {
            api.get('envios')
                .then(response => {
                    setRecords(response.data);

                })
            api.get('envios/plot')
                .then(response => {
                    setPlotRecords(response.data);
                })
            api.get('usuarios/plot')
                .then(response => {
                    setPlotUsers(response.data);
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

    return (
        <div>
            <header className='report-header'>
                <img src={logo} alt="Melskin" />
                <h1>DASHBOARD</h1>
            </header>
            <div className="main-container">
                <div className="content-container">
                    <div className="first-line">
                        <h2>Activity Over Time</h2>
                        <div className="graph">
                            <Chart
                                width={'800px'}
                                height={'180px'}
                                chartType="AreaChart"
                                loader={<div>Loading Chart...</div>}
                                data={[
                                    ['Date', 'Activity'],
                                    ...plotRecords.map((record, index) => [record.data, record.registros]),
                                ]}
                                options={{
                                    vAxis: {
                                        title: 'Activity',
                                    },
                                    colors: ["#FD8E40"],
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                    </div>
                    <div className="second-line">
                        <section>
                            <h2>Avrg Risk by Age and Sex</h2>
                            <div className="graph">
                                <Chart
                                    width={'400px'}
                                    height={'180px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart...</div>}
                                    data={[
                                        ['Age Group', 'Avrg Risk'],
                                        ...plotUsers.map((record, index) => [record.age_bin, record.avrg_risk]),
                                    ]}
                                    options={{
                                        chartArea: { width: '30%' },
                                        colors: ["#FD4040"],
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </section>
                        <section>
                            <h2>Avrg Risk by Age and Sex</h2>
                            <div className="graph">
                                <Chart
                                    width={'400px'}
                                    height={'180px'}
                                    chartType="Table"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        [
                                            { type: 'string', label: 'Age Group' },
                                            { type: 'number', label: 'Quantity' },
                                            { type: 'number', label: 'Avrg Risk' },
                                        ],
                                        ...plotUsers.map((record, index) => [record.age_bin, record.male_qty + record.female_qty, record.avrg_risk]),
                                    ]}
                                    options={{
                                        style: 'font-style:bold; font-size:22px;',
                                        showRowNumber: true,
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}