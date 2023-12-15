import { useRef, useState } from "react";
import { ChooseRoom } from "./components/choose-room/ChooseRoom";
import { ChooseEnvironment } from "./components/choose-environment/ChooseEnvironment";
import { ChooseFurniture } from "./components/choose-furniture/ChooseFurniture";
import { ChooseBarbeque } from "./components/choose-barbeque/ChooseBarbeque";
import { Budget, Loading, ProgressBar } from "../../components/index";
import './build-barbeque.scss';
import apiService from "../../services/api.service";
import { useNavigate } from "react-router-dom";

const stepTitles = {
    0: 'espacio',
    1: 'terminación',
    2: 'mueble',
    3: 'quincho',
};

export const BuildBarbeque = () => {

    const navigate = useNavigate();

    const [budget, setBudget] = useState( 10000000 );
    const [currentStep, setCurrentStep] = useState(0);
    const [room, setRoom] = useState( null );
    const [environmentMaterials, setEnvironmentMaterials] = useState( {} );
    const [furniture, setFurniture] = useState( null );
    const [barbeque, setBarbeque] = useState( null );
    const [isLoading, setIsLoading] = useState( false );

    const resultCanvasRef = useRef( null );

    const nextStep = () => {
        setCurrentStep( currentStep + 1 );
        if( currentStep === 3 ) {
            createImage();
        }
    }

    const decrementBudget = ( price ) => {
        setBudget( budget - price );
    }

    const createImage = async() => {
        setIsLoading( true );
        console.log({ room, environmentMaterials, furniture, barbeque });
        
        const canvas = resultCanvasRef.current;

        await drawRoom();

        const promises = [
            drawImageOnCanvas( environmentMaterials.paredes ),
            drawImageOnCanvas( environmentMaterials.piso ),
            drawImageOnCanvas( environmentMaterials.cielo ),
        ];

        await Promise.all( promises );

        await Promise.all([ 
            drawImageOnCanvas( furniture ), 
            drawImageOnCanvas( barbeque )
        ]);

        const imageDataURL = canvas.toDataURL('image/png');

        const res = await apiService.saveImage({ imageDataURL });
        console.log('Res', res.data.id);

        navigate(`/results/${res.data.id}`);

        setIsLoading( false );
    }

    const drawRoom = () => {
        return new Promise( ( resolve ) => {
            const canvas = resultCanvasRef.current;
            const ctx = canvas.getContext('2d');
    
            const img = new Image();
            img.src = `img/${room.folder}/${room.imageName}`;
            
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve();
            }
        })
    }

    const drawImageOnCanvas = ( obj ) => {
        return new Promise( ( resolve ) => {
            const canvas = resultCanvasRef.current;
            const ctx = canvas.getContext('2d');
    
            const img = new Image();
            img.src = obj.image_url;
            img.onload = () => {
              ctx.drawImage(img, obj[`${'res' + room.name + 'x'}`], obj[`${'res' + room.name + 'y'}`], obj[`${'res' + room.name + 'width'}`], obj[`${'res' + room.name + 'height'}`]);
                resolve();
            };
        })
    }

    return (
        <div className={`${ currentStep === 0 ? 'build-container' : 'white-background' }`}>
            <div className="header">
                <h1 className="select-text">Selecciona tu</h1>
                <span className="step-title">{stepTitles[currentStep]}</span>
            </div>

            { currentStep === 0 && !isLoading && <ChooseRoom room={room} decrementBudget={decrementBudget} setRoom={setRoom} nextStep={nextStep} /> }
            { currentStep === 1 && !isLoading && <ChooseEnvironment room={room} decrementBudget={decrementBudget} setEnvironmentMaterials={setEnvironmentMaterials} environmentMaterials={environmentMaterials} nextStep={nextStep}/> }
            { currentStep === 2 && !isLoading && <ChooseFurniture furniture={furniture} room={room} decrementBudget={decrementBudget} setFurniture={setFurniture} nextStep={nextStep}/> }
            { currentStep === 3 && !isLoading && <ChooseBarbeque nextStep={nextStep} barbeque={barbeque} room={room} decrementBudget={decrementBudget} setBarbeque={setBarbeque}/> }

            { isLoading && <div className="loading-container"><Loading /></div>}

            <canvas ref={resultCanvasRef} width="1200" height="600" style={{ display: 'none'}}></canvas>
            
            <Budget amount={budget}/>
            <ProgressBar currentStep={currentStep} />
        </div>
    )
};