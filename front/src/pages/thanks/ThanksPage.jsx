import { useNavigate } from 'react-router-dom';
import './thanks.scss';
import { useEffect } from 'react';

export const ThanksPage = () => {

    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(-1);
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 10000);

        return () => clearTimeout(timer);
    },[]);

    return (
        <div className='thanks-container'>
            <div className='back-btn'>
                <button
                    onClick={ onClickBack }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#000" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"/></svg>                
                </button>
            </div>
            <span className='gracias'>Gracias por participar por</span>
            <span className='quincho'>tu quincho soñado</span>
            <span className='aguilar'>aguilar</span>
            <span className='constructora'>constructora s.p.a</span>
        </div>
    )
};