import { useEffect, useRef } from "react";
import './canvas-image.scss';

export const EnvironmentCanvas = ({ room, environment, options, environmentMaterials, handleOptionClick }) => {

    const canvasRef = useRef( null );

    const drawRoom = () => {
        return new Promise( ( resolve ) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
    
            const img = new Image();
            img.src = `img/${room.folder}/${room.imageName}`;
            
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve();
            }
        })
    }

    useEffect(() => {
        drawRoom();
    },[]);

    const drawEnvironment = async () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        await ctx.clearRect(0, 0, canvas.width, canvas.height);
        await drawRoom();
        
        const img = new Image();
        img.src = environmentMaterials[environment.folder]?.image_url;
        // console.log('env', environmentMaterials[environment.folder][`${room.name + 'y'}`])
        // environmentMaterials[environment.folder][`${room.name + 'y'}`]
        img.onload = () => {
            ctx.drawImage(img, environmentMaterials[environment.folder][`${room.name + 'x'}`], environmentMaterials[environment.folder][`${room.name + 'y'}`] , environmentMaterials[environment.folder][`${room.name + 'width'}`], environmentMaterials[environment.folder][`${room.name + 'height'}`]);
        }
    }

    useEffect(() => {
        drawEnvironment();
    },[environmentMaterials]);
    
    return (
        <div className="environment">
            <canvas height={430} width={430} ref={ canvasRef }/>
            <div className="env-options">
                {options.map((option) => (
                    <img 
                        key={option.id} 
                        src={option.icon}
                        className={`option ${environmentMaterials[environment.folder]?.id === option.id && 'current'}`}
                        onClick={() => handleOptionClick( environment, option )}
                    />
                ))}
            </div>
        </div>    
    )
};
{/* <div
    key={option.id}
    className={`option ${environmentMaterials[environment.name]?.id === option.id && 'current'}`}
    style={{ backgroundColor: option.name }}
    onClick={() => handleOptionClick( environment, option )}
></div> */}