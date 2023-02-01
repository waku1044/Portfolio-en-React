import React from 'react'
import './Style.css'
import img from '../imagenes/Img.jsx'
import data from './Proyectos.jsx'

function Proyecto3 (){
					return (<>
							<a name='proyectos'/>
								<section className="proyectos">
									<div className="proyecto3">
										<div className="descripcion">
											<h2>{data[2].titulo}</h2>
											<p>{data[2].description}</p><br/><strong>Tecnologias usadas:</strong><br/><i>HTML5-CSS3-JAVASCRIPT</i>
											
										</div>
										<div className="codigo-link">
											<a href={data[2].codigo} target="_blank" className="btn">Ver codigo en Github</a>
											<a href={data[2].link} target="_blank" className="btn">Ir al Programa</a>
										</div>
									</div>
								</section>
							</>)

					
}
export default Proyecto3;