import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Questionnaire() {

    const [pergunta_1_fk, setPergunta_1_fk] = useState('');
    const [pergunta_2_fk, setPergunta_2_fk] = useState('');
    const [pergunta_3_fk, setPergunta_3_fk] = useState('');
    const [pergunta_4, setPergunta_4] = useState(false);
    const [pergunta_5, setPergunta_5] = useState(false);
    const [pergunta_6, setPergunta_6] = useState(false);
    const [pergunta_7, setPergunta_7] = useState('');
    const [pergunta_8, setPergunta_8] = useState(false);
    const [pergunta_9, setPergunta_9] = useState(false);
    const [pergunta_10, setPergunta_10] = useState(false);
    const [pergunta_11, setPergunta_11] = useState(false);
    const [pergunta_12, setPergunta_12] = useState(false);
    const [pergunta_13, setPergunta_13] = useState(false);
    const [pergunta_14, setPergunta_14] = useState(false);
    const [pergunta_15, setPergunta_15] = useState(false);
    const [pergunta_16, setPergunta_16] = useState(false);
    const [pergunta_17, setPergunta_17] = useState(false);

    const history = useHistory();

    async function registerUser(e) {
        e.preventDefault();

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const data = {
            nome_usuario: urlParams.get('name'),
            sobrenome_usuario: urlParams.get('lastName'),
            email_usuario: urlParams.get('email'),
            senha_usuario: urlParams.get('password'),
            cpf_usuario: urlParams.get('docNumber'),
            sexo_usuario: urlParams.get('gender'),
            data_nascimento_usuario: urlParams.get('birthDate'),
            telefone_usuario: urlParams.get('phoneNumber'),
            pais_usuario: urlParams.get('country'),
            estado_usuario: urlParams.get('state'),
            cidade_usuario: urlParams.get('city'),
            role_usuario: urlParams.get('role'),
            pergunta_1_fk,
            pergunta_2_fk,
            pergunta_3_fk,
            pergunta_4,
            pergunta_5,
            pergunta_6,
            pergunta_7,
            pergunta_8,
            pergunta_9,
            pergunta_10,
            pergunta_11,
            pergunta_12,
            pergunta_13,
            pergunta_14,
            pergunta_15,
            pergunta_16,
            pergunta_17,
        }

        try {
            const response = await api.post('usuarios', data);
            history.push('/login');
        } catch(err) {
            alert('An error occoured, try again.');
        }
    }    


    return (
        <div className="box-container">
            <form onSubmit={registerUser} >
                <h2>Before we get started, let us know a little more about yourself...</h2>
                <div className="content">

                    <div className="column1">
                        <a>1. What is the color of your skin?</a>
                        <select
                            id="q1"
                            value={pergunta_1_fk}
                            onChange={e => setPergunta_1_fk(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="1">Very fair, ivory white</option>
                            <option value="2">Fair</option>
                            <option value="3">Light brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>2. What is the natural color of your hair, that which you had when you were 20 years old?</a>
                        <select
                            id="q2"
                            value={pergunta_2_fk}
                            onChange={e => setPergunta_2_fk(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="1">Red</option>
                            <option value="2">Blonde</option>
                            <option value="3">Light or medium brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>3. What is the color of your eyes?</a>
                        <select
                            id="q3"
                            value={pergunta_3_fk}
                            onChange={e => setPergunta_3_fk(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="1">Blue</option>
                            <option value="2">Green</option>
                            <option value="3">Light brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>4. Does your skin turn red after being exposed to the sun without any protection?</a>
                        <select
                            id="q4"
                            value={pergunta_4}
                            onChange={e => setPergunta_4(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>5. Do you have a close relative (father, mother, siblings) who has or has had skin cancer?</a>
                        <select
                            id="q5"
                            value={pergunta_5}
                            onChange={e => setPergunta_5(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>6. Have you ever had skin cancer?</a>
                        <select
                            id="q6"
                            value={pergunta_6}
                            onChange={e => setPergunta_6(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>7. About how many moles do you have in your body?</a>
                        <label for="moles">Moles (0 to 100+):</label>
                        <input
                            type="range"
                            id="q7"
                            name="moles"
                            min="0"
                            max="100"
                            value={pergunta_7}
                            onChange={e => setPergunta_7(e.target.value)}
                        ></input>
                        <a>8. Sunburn is a painful reddening of the skin lasting more than 12h, after exposure to the sun. Have you ever suffered any sunburn?</a>
                        <select
                            id="q8"
                            value={pergunta_8}
                            onChange={e => setPergunta_8(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>9. Up ot date, have you ever had any outdoor job?</a>
                        <select
                            id="q9"
                            value={pergunta_9}
                            onChange={e => setPergunta_9(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>

                    <div className="column2">
                        <a>10. Have you ever lived or do you live in a geographical zone with intense sun, such as the beach, desert or mountain?</a>
                        <select
                            id="q10"
                            value={pergunta_10}
                            onChange={e => setPergunta_10(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>11. Do you practise or have ever practised any outdoor recreation activity?</a>
                        <select
                            id="q11"
                            value={pergunta_11}
                            onChange={e => setPergunta_11(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>12. Have you ever used tanning lamps or beds?</a>
                        <select
                            id="q12"
                            value={pergunta_12}
                            onChange={e => setPergunta_12(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>13. Have you ever received any organ transplant (for example: kidney, liver, heart, lung or pancreas)?</a>
                        <select
                            id="q13"
                            value={pergunta_13}
                            onChange={e => setPergunta_13(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>14. Have you received any radiotherapy treatment for cancer?</a>
                        <select
                            id="q14"
                            value={pergunta_14}
                            onChange={e => setPergunta_14(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>15. Have you received any phototherapy treatment or some skin condition?</a>
                        <select
                            id="q15"
                            value={pergunta_15}
                            onChange={e => setPergunta_15(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>16. During your vacations, do you go to the beach?</a>
                        <select
                            id="q16"
                            value={pergunta_16}
                            onChange={e => setPergunta_16(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>17. Have you ever consumed well water for 10 years or more?</a>
                        <select
                            id="q17"
                            value={pergunta_17}
                            onChange={e => setPergunta_17(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Select your option</option>
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <button type="submit" className="buttonQ">Send</button>
                    </div>

                </div>
            </form>
        </div>
    );
}