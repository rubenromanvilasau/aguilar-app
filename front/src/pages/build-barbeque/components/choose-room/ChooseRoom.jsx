import './room.scss';

const roomImages = [
    {
        id: 1,
        folder: 'espacios',
        name: 'cuadrado',
        imageName: 'cuadrado.png',
        price: 1000000,
        height: 600,
        width: 800
    },
    {
        id: 2,
        folder: 'espacios',
        name: 'L',
        imageName: 'L.png',
        price: 1000000,
        height: 600,
        width: 800
    },
    {
        id: 3,
        folder: 'espacios',
        name: 'rectangulo',
        imageName: 'rectangulo.png',
        price: 1000000,
        height: 600,
        width: 800
    }
];

export const ChooseRoom = ({room, setRoom, nextStep, decrementBudget }) => {

    const selectRoom = ( room ) => {
        setRoom( {...room, image_url: `img/${room.folder}/${room.imageName}`} );
    }

    const onClickNext = () => {
        nextStep();
    }

    return (
        <div className="room-container">
            <div className="room-options">
                { roomImages.map( roomImg => (
                    <div key={roomImg.id} className={`room ${roomImg.id === room?.id && 'current' }`} onClick={ () => { selectRoom( roomImg ) } }>
                        <img 
                            src={`img/${roomImg.folder}/${roomImg.imageName.split('.')[0]}-icon.png`} 
                            alt="room" 
                        />
                    </div>
                ))
                }
            </div>
            
            <div className="btn-container">
                <button
                    className="next-button"
                    onClick={onClickNext}
                    disabled={ !room }
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
};