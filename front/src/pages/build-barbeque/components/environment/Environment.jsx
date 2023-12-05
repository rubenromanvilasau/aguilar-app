import { useEffect, useState } from 'react';
import './environment.scss';

const environmentsImages = [
    {
        url: 'img/environments/env-1.png',
    },
    {
        url: 'img/environments/env-2.png',
    },
    {
        url: 'img/environments/env-3.png',
    }
];

const environmentsOptions = [
    {
        url: 'img/environments/env-1.png',
        id: 1
    },
    {
        url: 'img/environments/env-2.png',
        id: 2,
    },
    {
        url: 'img/environments/env-3.png',
        id: 3,
    }

];

export const Environment = ({ setWallsColor, setRoofColor, setFloorColor, nextStep }) => {

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionClick = (image, option) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [image.url]: option,
        }));
    }

    useEffect( () => {
        console.log('selectedOptions', selectedOptions);
    }, [selectedOptions]);

    return (
        <div className="environment-container">
            { environmentsImages.map( image => (
                <div key={image.url} className="environment">
                    <img src={image.url} alt="environment" />
                    <div className="env-options">
                    { environmentsOptions.map( option => (
                        <div 
                            key={option.id} 
                            className={`option ${selectedOptions[image.url]?.id === option.id && 'current'}`}
                                onClick={() => handleOptionClick(image, option)}
                        >
                        </div>
                    ))}
                    </div>
                </div>
              ))
            }

        </div>
    )
};