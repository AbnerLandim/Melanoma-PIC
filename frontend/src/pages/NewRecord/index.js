import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import smartApi from '../../services/smartApi';
import logoImg from '../../assets/logo.svg';

export default function NewRecord() {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState([]);

    const Compress = require('compress.js');

    const compress = new Compress();
    const user_id = localStorage.getItem('user_id');
    const history = new useHistory();

    async function handleNewRecord(e) {
        e.preventDefault();

        const data = {
            nome: title,
            descricao: description,
            imagem: image,
        }

        const analise = {
            image: image,
        }

        try {
            const criar_envio = await api.post('envios', data, {
                headers: {
                    Authorization: user_id,
                }
            });

            console.log(criar_envio.data);

            const asymmetry = await smartApi.post('asymmetry', analise);

            console.log(asymmetry.data);

            const colors = await smartApi.post('colors', analise);

            console.log(colors.data);

            const analyzed_data = {
                id_envio_fk: criar_envio.data.id,
                assimetria: asymmetry.data.asymmetry,
                cores: colors.data.colors.toString(),
                risco: "0.6",
            }

            console.log(analyzed_data)
            
            const new_record_id = await api.post('analise', analyzed_data);

            console.log(new_record_id.data);

            history.push('/');
        } catch (err) {
            alert('Error creating record. Try again.');
        }
    }

    function onFileUpload(e) {

        const files = [...e.target.files];
        compress.compress(files, {
            size: 4,
            quality: .50,
            maxWidth: 400,
            maxHeight: 400,
            resize: true,
        }).then((images) => {
            const img = images[0];
            const preview = document.getElementById('preview');
            preview.src = `${img.prefix}${img.data}`
            const base64img = img.prefix.concat(img.data);
            //console.log(base64img);
            setImage(base64img);
            //console.log('img state: ', image);
        })
    }

    return (
        <div className="new-record">
            <div className="content">

                <section>
                    <img src={logoImg} alt="Melskin" />
                    <h1>New Record</h1>
                    <a>Please, choose an image from one of the following extensions: jpeg, png.</a>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#FF802E" />
                        Back to home
                    </Link>
                </section>

                <form onSubmit={handleNewRecord} >
                    <input
                        placeholder="Title"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <label >Choose an image:</label>

                    <div className="img-group">
                        <input
                            type="file"
                            name="file"
                            className="file-input"
                            onChange={e => onFileUpload(e)}
                            required
                        />

                        <img src="" alt="" id="preview" />
                    </div>

                    <button type="submit" className="button">Create record</button>
                </form>
            </div>
        </div>
    );
}