import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './NewDetails.css'

function NewDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
			<div className="details-container">
				
				<div className="title9">
        <div>
					<span className="autor">{noticia.autor}</span>
					<span className="date">{noticia.dataPulicacao}</span>
				</div>
					<h2>{noticia.titulo}</h2>
				</div>
			
			<div className="descricao1">
				{noticia.descricao}
			</div>
      <div className="text">
				{noticia.conteudo}
			</div>
      </div>
		</article>
	)
}


export default NewDetails