import { useEffect, useRef } from 'react';
import './choose-furniture.scss';

const furnitureOptions = [
    {
        id: 1,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-1.png',
    },
    {
        id: 2,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-2.png',
    },
    {
        id: 3,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-3.png',
    },
    {
        id: 4,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-4.png',
    },
];

export const ChooseFurniture = ({ setFurniture, decrementBudget, nextStep }) => {

    const canvasRef = useRef( null );

    const handleOptionClick = ( furniture ) => {
        setFurniture( furniture );

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = furniture.image_url;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 200, 200);
        }

        decrementBudget( furniture.price );
        nextStep();
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
        <div className="furniture-container">
            <canvas width={400} height={400} ref={canvasRef}/>
            <div className='furniture-options'>
                { furnitureOptions.map( furniture => (
                    
                    <img 
                        className='furniture-option'
                        key={furniture.id} 
                        src={furniture.image_url}
                        alt="furniture"
                        onClick={ () => handleOptionClick( furniture ) }
                    />
                    ))
                }
            </div>
        </div>
    )
};