import React from 'react';
import style from './Style.css';
import fotoperfil from './img/fotoperfil1.jpg';



function Header(){

	const template = <header className='header'>
		
		<picture>
			<img className='fotoperfil' src={fotoperfil} alt="Logo"/>
			<h3>Front-end Developer </h3>
		</picture>
		
		<nav>
			<a href="#sobremi">Sobre mi</a>
			<a href="#habilidades">Habilidades</a>
			<a href="#proyectos">Proyectos</a>
			<a href="#">Contacto</a>
		</nav>

	</header>;

	return template;
}
export default Header;