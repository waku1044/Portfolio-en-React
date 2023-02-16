import React from 'react';
import img from '../imagenes/Img.jsx';
import {useRef, useState } from 'react';
import './Style.css';
import cert from '../imagenes/Certificados/certificado.js';
// import { Button } from 'reactstrap';


function Habilidades (){
	const dialog = useRef(null);
	const title = useRef(null);
	const [ima, setIma] = useState(null);
	
	function modal(e){
		
		switch(e.target.alt){
		case 'Html':
			title.current.innerHTML = '';
			dialog.current.classList.replace('noDialog', 'dialog');
			setIma(cert[2]);
			break;
		case 'Css':
			title.current.innerHTML = '';
			dialog.current.classList.replace('noDialog', 'dialog');
			setIma(cert[3]);
			break;
		case 'Javascript':
			title.current.innerHTML = '';
			dialog.current.classList.replace('noDialog', 'dialog');
			setIma(cert[0]);
			break;
		case 'jquery':
			title.current.innerHTML = '';
			dialog.current.classList.replace('noDialog', 'dialog');
			setIma(cert[1]);
			break;
		default:
			dialog.current.classList.replace('noDialog', 'dialog');
			title.current.innerHTML = 'Sin certificado por el momento';	
			setIma('');	
			setTimeout(()=>dialog.current.classList.replace('dialog', 'noDialog'),3000)
			


		}
	}

	function cerrar(e){
			e.target.parentNode.classList.replace('dialog', 'noDialog');
	}

	const template = 
	<>

		<a name='habilidades'/>
			<section className='habilidades'>
				<h2>&#8826; Habilidades &#8827;</h2>
				<div className='logos'>
				<dialog ref={dialog} className='noDialog'>
				<h3 ref={ title }></h3>
					<img className='imgdialog' src={ ima } alt="certificado"/>
					<button onClick= { cerrar } className='btn' >X</button>
				</dialog>
					<img src={img[9]}   onClick={ modal }  alt='Html'/>
					<img src={img[0]}    onClick={ modal } alt='Css'/>
					<img src={img[18]}   onClick={ modal } alt='Javascript'/>
					<img src={img[19]}   onClick={ modal } alt='jquery'/>
					<img src={img[20]}   onClick={ modal } alt='React'/>
					<img src={img[14]}   onClick={ modal } alt='Boostrap'/>
					<img src={img[21]}   onClick={ modal } alt='Tailwind'/>
					<img src={img[15]}   onClick={ modal } alt='Figma'/>
					<img style={{background:'#fff',borderRadius:'50%'}} src={img[17]} onClick={ modal }   alt='Github'/>
					<img src={img[16]}   onClick={ modal } alt='Git'/>
					
				</div>
			</section>;
			</>

	return template;


}

export default Habilidades;