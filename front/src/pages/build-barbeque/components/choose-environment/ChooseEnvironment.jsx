import { useEffect, useRef, useState } from 'react';
import { EnvironmentCanvas } from '../../../../components';

import './environment.scss';

const environmentsImages = [
    {
        id: 1,
        image_url: 'img/environments/env-1.png',
        name: 'floor',
    },
    {
        id: 2,
        image_url: 'img/environments/env-2.png',
        name: 'walls'
    },
    {
        id: 3,
        image_url: 'img/environments/env-3.png',
        name: 'roof'

    }
];

const colorsOptions = [
    {
        image_url: 'img/barbeques/barbeque-1.png',
        id: 1,
        price: 1000000,
        name: 'red',
    },
    {
        image_url: 'img/barbeques/barbeque-2.png',
        id: 2,
        price: 1000000,
        name: 'green',
    },
    {
        image_url: 'img/barbeques/barbeque-3.png',
        id: 3,
        price: 1000000,
        name: 'blue',
    }
];

export const ChooseEnvironment = ({ environmentColors, setEnvironmentColors, nextStep, decrementBudget }) => {

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionClick = ( environment, option ) => {
        setEnvironmentColors(prevOptions => ({
            ...prevOptions,
            [environment.name]: option,
        }));

        decrementBudget( option.price );
    }
    
    useEffect( () => {
        console.log('selectedOptions', environmentColors);
        
        if( Object.keys( environmentColors ).length === 3 ) {
            nextStep();
        }
        
    }, [environmentColors]);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    
    //     const image = new Image();
    //     image.src = environmentsImages[0].image_url;
    
    //     image.onload = function () {
    //       ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    //     };
    // },[]);

    const changeColor = (color) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.src = color.image_url;
        console.log('image',color.image_url);
        
        image.onload = function () {
            ctx.drawImage(image, 50, 50, 100, 100); 
        };
    }

    return (
        <div className="environment-container">
                { environmentsImages.map( environment => (
                    <EnvironmentCanvas
                        key={environment.image_url}
                        environment={environment}
                        colorsOptions={colorsOptions}
                        environmentColors={environmentColors}
                    />
                ))

                }
       
            {/* { environmentsImages.map( environment => (
                <div key={environment.image_url} className="environment">
                    <img src={environment.image_url} alt="environment" />
                    <div className="env-options">
                    { colorsOptions.map( option => (
                        <div 
                            key={option.id} 
                            className={`option ${environmentColors[environment.name]?.id === option.id && 'current'}`}
                            style={{ backgroundColor: option.name }}
                            onClick={() => handleOptionClick(environment, option)}
                        >
                        </div>
                    ))}
                    </div>
                </div>
              ))
            } */}
        </div>
    )
};