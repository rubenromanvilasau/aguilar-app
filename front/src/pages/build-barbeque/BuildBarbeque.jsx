import { useEffect, useRef, useState } from "react";
import { ChooseRoom } from "./components/choose-room/ChooseRoom";
import { ChooseEnvironment } from "./components/choose-environment/ChooseEnvironment";
import { ChooseFurniture } from "./components/choose-furniture/ChooseFurniture";
import { ChooseBarbeque } from "./components/choose-barbeque/ChooseBarbeque";
import { Budget, Loading, ProgressBar } from "../../components/index";
import './build-barbeque.scss';

const stepTitles = {
    0: 'espacio',
    1: 'terminación',
    2: 'mueble',
    3: 'quincho',
};

export const BuildBarbeque = () => {

    const [budget, setBudget] = useState( 8000000 );
    const [currentStep, setCurrentStep] = useState(0);
    const [room, setRoom] = useState( null );
    const [environmentColors, setEnvironmentColors] = useState( {} );
    const [furniture, setFurniture] = useState( null );
    const [barbeque, setBarbeque] = useState( null );
    const [isLoading, setIsLoading] = useState( false );

    const resultCanvasRef = useRef( null );

    const nextStep = () => {
        setCurrentStep( currentStep + 1 );
    }

    const decrementBudget = ( price ) => {
        setBudget( budget - price );
    }

    const createImage = () => {
        setIsLoading( true );
        console.log({ room, environmentColors, furniture, barbeque });
        
        const canvas = resultCanvasRef.current;
        canvas.width = room.width;

        drawImageOnCanvas( room );
        drawImageOnCanvas( environmentColors.walls );
        drawImageOnCanvas( environmentColors.floor );
        drawImageOnCanvas( environmentColors.roof );
        drawImageOnCanvas( furniture );
        drawImageOnCanvas( barbeque );

        const imageDataURL = canvas.toDataURL('image/png');
        console.log('imageDataURL', imageDataURL);

        setIsLoading( false );
    }

    const drawImageOnCanvas = ( obj ) => {
        console.log('OBJ CANVAS', obj)
        const canvas = resultCanvasRef.current;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = obj.image_url;
        img.onload = () => {
        //   ctx.drawImage(img, obj.x, obj.y);
          ctx.drawImage(img, 0, 0, obj.height, obj.width);
        };
      }

    useEffect(() => {
        if ( currentStep === 3 && barbeque !== null ) {
            createImage();
        }
    }, [barbeque, currentStep]);

    return (
        <div className={`${ currentStep === 0 ? 'build-container' : 'white-background' }`}>
            <div className="header">
                <h1 className="select-text">Selecciona tu</h1>
                <span className="step-title">{stepTitles[currentStep]}</span>
            </div>

            { currentStep === 0 && !isLoading && <ChooseRoom decrementBudget={decrementBudget} setRoom={setRoom} nextStep={nextStep} /> }
            { currentStep === 1 && !isLoading && <ChooseEnvironment room={room} decrementBudget={decrementBudget} setEnvironmentColors={setEnvironmentColors} environmentColors={environmentColors} nextStep={nextStep}/> }
            { currentStep === 2 && !isLoading && <ChooseFurniture decrementBudget={decrementBudget} setFurniture={setFurniture} nextStep={nextStep}/> }
            { currentStep === 3 && !isLoading && <ChooseBarbeque decrementBudget={decrementBudget} setBarbeque={setBarbeque}/> }

            { isLoading && <div className="loading-container"><Loading /></div>}

            {/* <canvas ref={resultCanvasRef} width="800" height="600" style={{ display: 'none' }}></canvas> */}
            <canvas ref={resultCanvasRef} width="800" height="600"></canvas>
            
            <Budget amount={budget}/>
            <ProgressBar currentStep={currentStep} />
        </div>
    )
};