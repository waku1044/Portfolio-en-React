import React from 'react'
import './Style.css'
import img from '../imagenes/Img.jsx'
import data from './Proyectos.jsx'

function Proyecto1 (){
					return (<>
							<a name='proyectos'/>
								<section className="proyectos">
								<h2>&#8826; Proyectos &#8827;</h2>
									<div className="proyecto1">
										<div className="descripcion">
											<h2>{data[0].titulo}</h2>
											<p>{data[0].description}</p><br/><strong>Tecnologias usadas:</strong><br/><i>HTML5-CSS3-JAVASCRIPT</i>
											
										</div>
										<div className="codigo-link">
											<a href={data[0].codigo} target="_blank" className="btn">Ver codigo en Github</a>
											<a href={data[0].link} target="_blank" className="btn">Ir al juego</a>
										</div>
									</div>
								</section>
							</>)

					
}
export default Proyecto1;