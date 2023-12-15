import { useEffect, useRef } from 'react';
import './choose-barbeque.scss';

const barbequeOptions = [
    {
        id: 1,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 1.png',
        icon: 'parrilla/rectangulo/parrilla 1.png',

        cuadradoheight: 130,
        cuadradowidth: 120,
        cuadradox: 210,
        cuadradoy: 180,

        Lheight: 55,
        Lwidth: 55,
        Lx: 165,
        Ly: 220,
        
        rectanguloheight: 80,
        rectangulowidth: 80,
        rectangulox: 140,
        rectanguloy: 195,

        rescuadradoheight: 170,
        rescuadradowidth: 170,
        rescuadradox: 640,
        rescuadradoy: 240,

        resLheight: 100,
        resLwidth: 100,
        resLx: 450,
        resLy: 265,

        resrectanguloheight: 110,
        resrectangulowidth: 110,
        resrectangulox: 410,
        resrectanguloy: 250,
    },
    {
        id: 2,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 2.png',
        icon: 'parrilla/rectangulo/parrilla 2.png',
        
        cuadradoheight: 100,
        cuadradowidth: 100,
        cuadradox: 225,
        cuadradoy: 215,
        
        Lheight: 350,
        Lwidth: 350,
        Lx: 115,
        Ly: 65,
        
        rectanguloheight: 70,
        rectangulowidth: 80,
        rectangulox: 140,
        rectanguloy: 210,

        rescuadradoheight: 140,
        rescuadradowidth: 150,
        rescuadradox: 660,
        rescuadradoy: 275,

        resLheight: 600,
        resLwidth: 630,
        resLx: 375,
        resLy: 0,

        resrectanguloheight: 100,
        resrectangulowidth: 110,
        resrectangulox: 420,
        resrectanguloy: 270,
    },
    {
        id: 3,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 3.png',
        icon: 'parrilla/rectangulo/parrilla 3.png',
        
        cuadradoheight: 320,
        cuadradowidth: 320,
        cuadradox: 30,
        cuadradoy: 70,
        
        Lheight: 300,
        Lwidth: 300,
        Lx: 125,
        Ly: 80,
        
        rectanguloheight: 400,
        rectangulowidth: 400,
        rectangulox: 90,
        rectanguloy: 30,

        rescuadradoheight: 500,
        rescuadradowidth: 500,
        rescuadradox: 350,
        rescuadradoy: 60,

        resLheight: 600,
        resLwidth: 600,
        resLx: 380,
        resLy: 0,

        resrectanguloheight: 600,
        resrectangulowidth: 600,
        resrectangulox: 350,
        resrectanguloy: 0,
    },
    {
        id: 4,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 4.png',
        icon: 'parrilla/rectangulo/parrilla 4.png',
        
        cuadradoheight: 90,
        cuadradowidth: 90,
        cuadradox: 220,
        cuadradoy: 220,

        Lheight: 350,
        Lwidth: 350,
        Lx: 115,
        Ly: 65,

        rectanguloheight: 70,
        rectangulowidth: 70,
        rectangulox: 150,
        rectanguloy: 210,

        rescuadradoheight: 150,
        rescuadradowidth: 150,
        rescuadradox: 650,
        rescuadradoy: 270,

        resLheight: 600,
        resLwidth: 600,
        resLx: 370,
        resLy: 0,

        resrectanguloheight: 100,
        resrectangulowidth: 100,
        resrectangulox: 420,
        resrectanguloy: 270,
    },
    {
        id: 5,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 5.png',
        icon: 'parrilla/rectangulo/parrilla 5.png',
        
        cuadradoheight: 100,
        cuadradowidth: 100,
        cuadradox: 220,
        cuadradoy: 220,
        
        Lheight: 380,
        Lwidth: 380,
        Lx: 105,
        Ly: 45,
        
        rectanguloheight: 70,
        rectangulowidth: 70,
        rectangulox: 150,
        rectanguloy: 210,

        rescuadradoheight: 150,
        rescuadradowidth: 150,
        rescuadradox: 640,
        rescuadradoy: 270,

        resLheight: 520,
        resLwidth: 500,
        resLx: 410,
        resLy: 45,

        resrectanguloheight: 100,
        resrectangulowidth: 100,
        resrectangulox: 430,
        resrectanguloy: 270,
    },
    {
        id: 6,
        folder: 'parrilla',
        price: 100000,
        imageName: 'parrilla 6.png',
        icon: 'parrilla/rectangulo/parrilla 6.png',
        
        cuadradoheight: 130,
        cuadradowidth: 120,
        cuadradox: 200,
        cuadradoy: 190,
        
        Lheight: 340,
        Lwidth: 340,
        Lx: 115,
        Ly: 70,
        
        rectanguloheight: 75,
        rectangulowidth: 75,
        rectangulox: 150,
        rectanguloy: 195,

        rescuadradoheight: 180,
        rescuadradowidth: 180,
        rescuadradox: 610,
        rescuadradoy: 235,

        resLheight: 600,
        resLwidth: 600,
        resLx: 380,
        resLy: 0,

        resrectanguloheight: 100,
        resrectangulowidth: 110,
        resrectangulox: 420,
        resrectanguloy: 250,
    },
];

export const ChooseBarbeque = ({ room, barbeque, setBarbeque, decrementBudget, nextStep }) => {

    const canvasRef = useRef( null );

    const handleOptionClick = async( barbeque ) => {
        setBarbeque( {...barbeque, image_url: `img/${barbeque.folder}/${room.name}/${barbeque.imageName}` } );

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        await ctx.clearRect(0, 0, canvas.width, canvas.height);
        await drawRoom();

        const img = new Image();
        img.src = `img/${barbeque.folder}/${room.name}/${barbeque.imageName}`;
        img.onload = () => {
            ctx.drawImage(img, barbeque[`${room.name + 'x'}`], barbeque[`${room.name + 'y'}`], barbeque[`${room.name + 'width'}`], barbeque[`${room.name + 'height'}`]);
        }

        decrementBudget( barbeque.price );
    }

    const drawRoom = () => {
        return new Promise( ( resolve ) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = `img/${room.folder}/${room.imageName}`;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve();
            }
        });
    }

    const onClickNext = () => {
        nextStep();
        decrementBudget( barbeque.price );
    }

    useEffect(() => {
        drawRoom();
    }, [])

    return (
        <div className="barbeque-container">
            <div className="barbeque-select">
                <canvas ref={canvasRef} height={460} width={460}/>
                <div className='barbeque-options'>
                    { barbequeOptions.map( barbeque => (
                        <div 
                            key={barbeque.id} 
                            className='img-div'
                            onClick={ () => handleOptionClick( barbeque ) }
                        >
                            <img 
                                className='barbeque-option'
                                src={`img/${barbeque.icon}`}
                                alt="barbeque"
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
                    disabled={ !barbeque }
                >
                    Siguiente
                </button>
            </div>
    </div>
    )
};