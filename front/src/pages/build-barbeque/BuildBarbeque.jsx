import { useEffect, useState } from "react";
import { ChooseRoom } from "./components/choose-room/ChooseRoom";
import { ChooseEnvironment } from "./components/choose-environment/ChooseEnvironment";
import { ChooseFurniture } from "./components/choose-furniture/ChooseFurniture";
import { ChooseBarbeque } from "./components/choose-barbeque/ChooseBarbeque";
import { Loading } from "../../components/index";
import { Results } from "./components/results-qr/Results";
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

    const nextStep = () => {
        setCurrentStep( currentStep + 1 );
    }

    const decrementBudget = ( price ) => {
        setBudget( budget - price );
    }

    const createImage = () => {
        setIsLoading( true );
        console.log({ room, environmentColors, furniture, barbeque });

        setIsLoading( false );
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
            { currentStep === 4 && !isLoading && <Results/> }

            { isLoading && <div className="loading-container"><Loading /></div>}
            
            <div className="budget-container">
                <div className="budget">
                    <span>Presupuesto: {budget.toLocaleString('es-cl', {currency: 'CLP', style: 'currency'})}</span>
                </div>
            </div>

            <div className="progress">
            </div>
        </div>
    )
};