import { useRef } from 'react';
import './home.scss';
import apiService from '../../services/api.service';

export const Home = () => {

  const nameRef = useRef( null );
  const emailRef = useRef( null );
  const phoneRef = useRef( null );

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    console.log( 'form', { name, email, phone } );
  }

  return (
    <div className='home-container'>
      <div className="form-card">
        <div className="title">
          <span>Participa del concurso</span>
        </div>
        <div className="subtitle">
          <span>Ingresa tus datos para ser parte de nuestra familia y enterarte de todas las novedades y concursos que tenemos para ti</span>
        </div>
        <div className="body">
          <input ref={nameRef} type="text" className="input" placeholder='Nombre' />
          <input ref={emailRef} type="email" className="input" placeholder='Email'/>
          <input ref={phoneRef} type="tel" className="input" placeholder='Teléfono de contacto'/>
          <button 
            className='participate'
            onClick={ handleSubmit }
          >
            Participar ahora
          </button>
        </div>
      </div>
    </div>
  )
};