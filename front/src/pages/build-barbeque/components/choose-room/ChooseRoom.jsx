import './room.scss';

const roomImages = [
    {
        id: 1,
        image_url: 'img/rooms/room-1.png',
        price: 1000000,
        height: 600,
        width: 800
    },
    {
        id: 2,
        image_url: 'img/rooms/room-2.png',
        price: 1000000,
        height: 600,
        width: 800
    },
    {
        id: 3,
        image_url: 'img/rooms/room-3.png',
        price: 1000000,
        height: 600,
        width: 800
    }
];

export const ChooseRoom = ({ setRoom, nextStep, decrementBudget }) => {

    const selectRoom = ( room ) => {
        decrementBudget( room.price );
        setRoom( room );
        nextStep();
    }

    return (
        <div className="room-container">
            { roomImages.map( room => (
                <div key={room.id} className="room" onClick={ () => { selectRoom( room ) } }>
                    <img src={room.image_url} alt="room" />
                </div>
            ))
            }
        </div>
    )
};