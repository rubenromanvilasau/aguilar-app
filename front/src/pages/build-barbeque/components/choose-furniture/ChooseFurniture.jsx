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

    const handleOptionClick = ( furniture ) => {
        setFurniture( furniture );
        decrementBudget( furniture.price );
        nextStep();
    }

    return (
        <div className="furniture-container">
            <img className='left-image' src="img/furniture/furniture.png" alt="" />
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