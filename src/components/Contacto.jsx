import React from 'react';
import './Style.css'


function Contacto(){

	return  <>	
				<a name='contacto'/>
					<section className="contacto">
						<h2>&#8826; Contacto &#8827;</h2>
						<form action="https://formsubmit.co/walterg610@gmail.com" method="POST" id="formulario">
				        	
				        	<input type="text" name="nombreapellido" id="nombreapellido" className="input-padron" placeholder="Nombre / Empresa" required/>
				        	
				        	<input type="email" name="email" id="email" placeholder="Email@dominio.com" className="input-padron" required/>
				        	
				        	<input type="tel" name="telefono" id="telefono" placeholder="(xx) xxxx xxxx" className="input-padron" required/>

			                <textarea  id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aqui" className="input-padron"></textarea>

			                <input type="submit" value="Enviar" id="enviar"/>
			                <input type="hidden" name="_next" value="https://waku1044.github.io/portfolio/"/>
			                <input type="hidden" name="_captcha" value="false"/>
		                
		                </form>
					</section>
			</>

}
export default Contacto;