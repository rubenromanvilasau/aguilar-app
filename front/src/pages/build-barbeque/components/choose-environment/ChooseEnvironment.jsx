import { useEffect } from 'react';
import { EnvironmentCanvas } from '../../../../components';

import './environment.scss';

const environmentsImages = [
    {
        id: 1,
        image_url: 'img/environments/env-1.png',
        name: 'floor',
        height: 100,
        width: 100
    },
    {
        id: 2,
        image_url: 'img/environments/env-2.png',
        name: 'walls',
        height: 100,
        width: 100
    },
    {
        id: 3,
        image_url: 'img/environments/env-3.png',
        name: 'roof',
        height: 100,
        width: 100
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

    return (
        <div className="environment-container">
                { environmentsImages.map( environment => (
                    <EnvironmentCanvas
                        key={environment.image_url}
                        environment={environment}
                        colorsOptions={colorsOptions}
                        environmentColors={environmentColors}
                        handleOptionClick={handleOptionClick}
                    />
                ))
                }
        </div>
    )
};