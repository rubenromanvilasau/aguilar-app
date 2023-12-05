import { useEffect, useState } from "react";
import { Room } from "./components/room/Room";
import { Environment } from "./components/environment/Environment";
import './build-barbeque.scss';

const stepTitles = {
    0: 'espacio',
    1: 'terminación',
};

export const BuildBarbeque = () => {

    const [budget, setBudget] = useState( 8000000 );
    const [currentStep, setCurrentStep] = useState(0);
    const [room, setRoom] = useState( null );
    const [wallsColor, setWallsColor] = useState( null );
    const [floorColor, setFloorColor] = useState( null );
    const [roofColor, setRoofColor] = useState( null );

    useEffect(() => {
        console.log('room', room);
    },[room]);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <div className={`${ currentStep === 0 ? 'build-container' : 'white-background' }`}>
            <div className="header">
                <h1 className="select-text">Selecciona tu</h1>
                <span className="step-title">{stepTitles[currentStep]}</span>
            </div>
            { currentStep === 0 && <Room setRoom={setRoom} nextStep={nextStep} /> }
            { currentStep === 1 && <Environment setWallsColor={setWallsColor} setRoofColor={setRoofColor} setFloorColor={setFloorColor} nextStep={nextStep}/> }
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