import { useEffect, useRef } from 'react';
import './choose-furniture.scss';

const furnitureOptions = [
    {
        id: 1,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-1.png',
        height: 300,
        width: 300
    },
    {
        id: 2,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-2.png',
        height: 300,
        width: 300
    },
    {
        id: 3,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-3.png',
        height: 300,
        width: 300
    },
    {
        id: 4,
        name: 'mesa',
        price: 100000,
        image_url: 'img/furniture/furniture-4.png',
        height: 300,
        width: 300
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
        img.src = 'img/quincho.jpeg';
        // ctx.imageSmoothingEnabled = true;

        img.onload = () => {
            // ctx.clearRect(0, 0, canvasWidth, canvasHeight); //clean canvas
            ctx.drawImage(img, 0, 0, canvas.height, canvas.width);
        }
    }, [])
    

    return (
        <div className="furniture-container">
            <canvas width={300} height={300} ref={canvasRef}/>
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