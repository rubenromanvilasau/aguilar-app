import { useEffect } from 'react';
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

    const handleOptionClick = ( furniture ) => {
        setBarbeque( furniture );
        decrementBudget( furniture.price );
    }

    return (
        <div className="barbeque-container">
        <img className='left-image' src="img/furniture/furniture.png" alt="" />
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