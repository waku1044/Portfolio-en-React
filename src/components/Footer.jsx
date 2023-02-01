import React from 'react'
import './Style.css'
import img from '../imagenes/Img.jsx'



function Footer(){
	return	(
				<><footer>
					<h4>REDES</h4>
					<div className="logoredes">
						<a href="https://www.instagram.com/wakug44" target="_blank"><img src={img[11]} alt="instagram"/></a>
						<a href="https://www.linkedin.com/in/walter-gimenez-waku" target='_blank'><img src={img[12]} alt="linkedin"/></a>
						<a href="https://github.com/waku1044" target='_blank'><img src={img[17]} alt="github"/></a>
						
					</div>
					<p>
						&copy; Todos los derechos reservados.
					</p>
					<p>
						Design by <strong><i>wakutec</i></strong>
					</p>	
					
				</footer></>);

}
export default Footer;