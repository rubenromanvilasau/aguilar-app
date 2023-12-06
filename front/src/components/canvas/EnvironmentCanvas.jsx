import { useEffect, useRef } from "react";
import './canvas-image.scss';


export const EnvironmentCanvas = ({ environment, colorsOptions, environmentColors }) => {

    const canvasRef = useRef( null );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = environment.image_url;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, environment.width, environment.height);
        }
    },[]);
    
    return (
        <div className="environment">
            <canvas ref={ canvasRef } width={300} height={200} style={{ border: '1px solid #000' }} />
            <div className="env-options">
                {colorsOptions.map((option) => (
                <div
                    key={option.id}
                    className={`option ${environmentColors[environment.name]?.id === option.id && 'current'}`}
                    style={{ backgroundColor: option.name }}
                    // onClick={() => handleOptionClick(environment, option)}
                ></div>
                ))}
            </div>
        </div>    
    )
};