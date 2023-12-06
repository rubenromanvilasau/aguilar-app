import { useEffect, useRef } from "react";
import './canvas-image.scss';

export const EnvironmentCanvas = ({ environment, colorsOptions, environmentColors, handleOptionClick }) => {

    const canvasRef = useRef( null );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = environment.image_url;
        
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    },[]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        img.src = environmentColors[environment.name]?.image_url;
        
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    },[environmentColors]);
    
    return (
        <div className="environment">
            <canvas height={300} width={300} ref={ canvasRef }/>
            <div className="env-options">
                {colorsOptions.map((option) => (
                <div
                    key={option.id}
                    className={`option ${environmentColors[environment.name]?.id === option.id && 'current'}`}
                    style={{ backgroundColor: option.name }}
                    onClick={() => handleOptionClick( environment, option )}
                ></div>
                ))}
            </div>
        </div>    
    )
};