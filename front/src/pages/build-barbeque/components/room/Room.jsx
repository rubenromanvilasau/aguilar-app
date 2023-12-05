import './room.scss';

const roomImages = [
    {
        url: 'img/rooms/room-1.png',
    },
    {
        url: 'img/rooms/room-2.png',
    },
    {
        url: 'img/rooms/room-3.png',
    }
];

export const Room = ({ setRoom, nextStep }) => {

    const selectRoom = (room) => {
        setRoom(room);
        nextStep();
    }

    return (
        <div className="room-container">
            { roomImages.map( image => (
                <div key={image.url} className="room" onClick={ selectRoom }>
                    <img src={image.url} alt="room" />
                </div>
            ))
            }
        </div>
    )
};