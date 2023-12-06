import { useEffect, useRef } from 'react';
import './choose-barbeque.scss';
const barbequeOptions = [
    {
        id: 1,
        name: 'barbeque',
        price: 100000,
        image_url: 'img/barbeques/barbeque-1.png',
    },
    {
        id: 2,
        name: 'barbeque',
        price: 100000,
        image_url: 'img/barbeques/barbeque-2.png',
    },
    {
        id: 3,
        name: 'barbeque',
        price: 100000,
        image_url: 'img/barbeques/barbeque-3.png',
    },
    {
        id: 4,
        name: 'barbeque',
        price: 100000,
        image_url: 'img/barbeques/barbeque-4.png',
    },
];

export const ChooseBarbeque = ({ setBarbeque, decrementBudget, createImage }) => {

    const canvasRef = useRef( null );

    const handleOptionClick = ( furniture ) => {
        setBarbeque( furniture );

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = furniture.image_url;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 200, 200);
        }

        decrementBudget( furniture.price );
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = 'img/furniture/furniture.png';
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }, [])

    return (
        <div className="barbeque-container">
        <canvas ref={canvasRef} height={500} width={500}/>
        <div className='barbeque-options'>
            { barbequeOptions.map( barbeque => (
                <img 
                    className='barbeque-option'
                    key={barbeque.id} 
                    src={barbeque.image_url}
                    alt="barbeque"
                    onClick={ () => handleOptionClick( barbeque ) }
                />
                ))
            }
        </div>
    </div>
    )
};