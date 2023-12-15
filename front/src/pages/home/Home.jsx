import { useRef, useState } from 'react';
import './home.scss';
import apiService from '../../services/api.service';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  
  const [error, setError] = useState( { status: false, message: '', input: '' } );

  const nameRef = useRef( null );
  const emailRef = useRef( null );
  const phoneRef = useRef( null );

  const handleSubmit = ( event ) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if( !validateInputs( { name, email, phone } ) ) return;

    apiService.creatUser( { name, email, phone: phone } ).then( response => {
      console.log('response', response);
      navigate('/build');
    });


    console.log( 'form', { name, email, phone } );
  }

  const validateInputs = ( { name, email, phone } ) => {
    if( !name  ) {
      setError( { status: true, message: 'Ingrese un nombre', input: 'name' } );
      return false;
    }else if( !email ) {
      setError( { status: true, message: 'Ingrese un email', input: 'email' } );
      return false;
    }else if( !phone ) {
      setError( { status: true, message: 'Ingrese un teléfono', input: 'phone' } );
      return false;
    }else{
      setError( { status: false, message: '', input: '' } );
      return true;
    }
  }

  return (
    <div className='home-container'>
      <div className='message'>
        <span className='first'>Tu quincho soñado</span>
        <span className='second'>Gracias a</span>
        <span className='third'>Aguilar</span>
        <span className='fourth'>Constructora S.P.A</span>

      </div>
      <div className="form-card">
        <div className="title">
          <span>Participa del concurso</span>
        </div>
        <div className="subtitle">
          <span>Ingresa tus datos para ser parte de nuestra familia y enterarte de todas las novedades y concursos que tenemos para ti</span>
        </div>
        <div className="body">
          <input ref={nameRef} type="text" className="input" placeholder='Nombre' />
          { error.status && error.input === 'name' && <span className='error'>{ error.message }</span> }
          
          <input ref={emailRef} type="email" className="input" placeholder='Email'/>
          { error.status && error.input === 'email' && <span className='error'>{ error.message }</span> }
          
          <input ref={phoneRef} type="tel" className="input" placeholder='Teléfono de contacto'/>
          { error.status && error.input === 'phone' && <span className='error'>{ error.message }</span> }
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