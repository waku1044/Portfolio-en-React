import React from 'react';
import img from '../imagenes/Img.jsx';

function Habilidades (){

	const template = 
	<>
		<a name='habilidades'/>
			<section className='habilidades'>
				<h2>&#8826; Habilidades &#8827;</h2>
				<div className='logos'>
					<img src={img[9]}  alt='logo Html'/>
					<img src={img[0]}  alt='logo css'/>
					<img src={img[18]}  alt='logo javascript'/>
					<img src={img[19]}  alt='logo jquery '/>
					<img src={img[20]}  alt='logo React'/>
					<img src={img[14]}  alt='logo boostrap'/>
					<img src={img[21]}  alt='logo Tailwind'/>
					<img src={img[15]}  alt='logo Figma'/>
					<img style={{background:'#fff',borderRadius:'50%'}} src={img[17]}  alt='logo Github'/>
					<img src={img[16]}  alt='logo git'/>
					
				</div>
			</section>;
			</>

	return template;


}

export default Habilidades;