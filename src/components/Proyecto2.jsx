import React from 'react'
import './Style.css'
import img from '../imagenes/Img.jsx'
import data from './Proyectos.jsx'

function Proyectos2 (){
					return (<>
							<a name='proyectos'/>
								<section className="proyectos">
									<div className="proyecto2">
										<div className="descripcion">
											<h2>{data[1].titulo}</h2>
											<p>{data[1].description}</p><br/><strong>Tecnologias usadas:</strong><br/><i>HTML5-CSS3-JAVASCRIPT</i>
											
										</div>
										<div className="codigo-link">
											<a href={data[1].codigo} target="_blank" className="btn">Ver codigo en Github</a>
											<a href={data[1].link} target="_blank" className="btn">Ir a la Web</a>
										</div>
									</div>
								</section>
							</>)

					
}
export default Proyectos2;