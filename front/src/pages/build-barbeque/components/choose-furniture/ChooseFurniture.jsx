import { useEffect, useRef } from 'react';
import './choose-furniture.scss';

const furnitureOptions = [
    {
        id: 1,
        price: 409990,
        folder: 'muebles',
        imageName: 'mesa 1.png',

        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,

        Lheight: 70,
        Lwidth: 100,
        Lx: 220,
        Ly: 240,
        
        rectanguloheight: 480,
        rectangulowidth: 450,
        rectangulox: 25,
        rectanguloy: -15,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 330,
        rescuadradoy: 340,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 600,
        resrectangulowidth: 705,
        resrectangulox: 335,
        resrectanguloy: 0,
    },
    {
        id: 2,
        price: 869990,
        folder: 'muebles',
        imageName: 'mesa 2.png',
        
        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,
        
        rectanguloheight: 60,
        rectangulowidth: 120,
        rectangulox: 182,
        rectanguloy: 240,
       
        Lheight: 70,
        Lwidth: 100,
        Lx: 220,
        Ly: 240,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 330,
        rescuadradoy: 340,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 100,
        resrectangulowidth: 160,
        resrectangulox: 600,
        resrectanguloy: 320,
    },
    {
        id: 3,
        price: 349990,
        folder: 'muebles',
        imageName: 'mesa 3.png',

        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,
        
        rectanguloheight: 70,
        rectangulowidth: 120,
        rectangulox: 180,
        rectanguloy: 240,
        
        Lheight: 70,
        Lwidth: 100,
        Lx: 220,
        Ly: 240,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 340,
        rescuadradoy: 330,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 100,
        resrectangulowidth: 160,
        resrectangulox: 600,
        resrectanguloy: 320,
    },
    {
        id: 4,
        price: 799990,
        folder: 'muebles',
        imageName: 'mesa 4.png',

        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,

        Lheight: 70,
        Lwidth: 100,
        Lx: 220,
        Ly: 240,

        rectanguloheight: 400,
        rectangulowidth: 400,
        rectangulox: 54,
        rectanguloy: 35,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 340,
        rescuadradoy: 330,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 600,
        resrectangulowidth: 705,
        resrectangulox: 335,
        resrectanguloy: 0,
    },
    {
        id: 5,
        price: 1339990,
        folder: 'muebles',
        imageName: 'mesa 5.png',
       
        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,

        Lx: 220,
        Ly: 240,
        Lheight: 70,
        Lwidth: 100,

        rectanguloheight: 300,
        rectangulowidth: 300,
        rectangulox: 110,
        rectanguloy: 100,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 340,
        rescuadradoy: 330,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 600,
        resrectangulowidth: 705,
        resrectangulox: 335,
        resrectanguloy: 0,
    },
    {
        id: 6,
        price: 1983960,
        folder: 'muebles',
        imageName: 'mesa 6.png',

        cuadradoheight: 70,
        cuadradowidth: 80,
        cuadradox: 120,
        cuadradoy: 265,

        Lheight: 70,
        Lwidth: 100,
        Lx: 220,
        Ly: 240,

        rectanguloheight: 400,
        rectangulowidth: 400,
        rectangulox: 54,
        rectanguloy: 30,

        rescuadradoheight: 115,
        rescuadradowidth: 160,
        rescuadradox: 340,
        rescuadradoy: 330,

        resLheight: 80,
        resLwidth: 130,
        resLx: 600,
        resLy: 320,

        resrectanguloheight: 600,
        resrectangulowidth: 705,
        resrectangulox: 335,
        resrectanguloy: 0,
    },
];

export const ChooseFurniture = ({ room, furniture, setFurniture, decrementBudget, nextStep }) => {

    const canvasRef = useRef( null );

    const handleOptionClick = async( furniture ) => {
        setFurniture( {...furniture, image_url: `img/${furniture.folder}/${room.name}/${furniture.imageName}`} );

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        await ctx.clearRect(0, 0, canvas.width, canvas.height);
        await drawRoom();

        const img = new Image();
        img.src = `img/${furniture.folder}/${room.name}/${furniture.imageName}`;
        img.onload = () => {
            ctx.drawImage(img, furniture[`${room.name + 'x'}`], furniture[`${room.name + 'y'}`], furniture[`${room.name + 'width'}`], furniture[`${room.name + 'height'}`]);
        }

    }

    const drawRoom = () => {
        return new Promise( ( resolve ) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            
            const img = new Image();
            img.src = `img/${room.folder}/${room.imageName}`;
    
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.height, canvas.width);
                resolve();
            }
        })
    }

    const onClickNext = () => {
        nextStep();
        decrementBudget( furniture.price );
    }

    useEffect(() => {
        drawRoom();
    }, [])
    

    return (
        <div className="furniture-container">
            <div className="select-container">
                <canvas width={460} height={460} ref={canvasRef}/>
                <div className='furniture-options'>
                    { furnitureOptions.map( furniture => (
                        <div 
                            className='img-div' 
                            key={furniture.id}
                            onClick={ () => handleOptionClick( furniture ) }
                        > 
                            <img 
                                className='furniture-option'
                                src={`img/${furniture.folder}/${room.name === 'rectangulo' ? 'L' : room.name}/${furniture.imageName}`}
                                alt="furniture"
                            />
                        </div>
                        ))
                    }
                </div>
            </div>

            <div className="btn-container">
                <button
                    className="next-button"
                    onClick={onClickNext}
                    disabled={ !furniture }
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
};