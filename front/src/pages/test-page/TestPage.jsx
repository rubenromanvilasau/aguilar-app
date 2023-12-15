import { useEffect, useRef } from 'react';
import './test-page.scss';

export const TestPage = () => {

    const canvasRef = useRef( null );

    const handleDownloadImage = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'my-image.png';
        link.href = image;
        link.click();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        const drawImages = () => {
          // Cargar la primera imagen
          const img1 = new Image();
          img1.src = 'img/espacios/rectangulo.png';
    
          img1.onload = function () {
            // Dibujar la primera imagen en el canvas
            ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);
    
            // Cargar la segunda imagen
            const img2 = new Image();
            img2.src = 'img/muebles/rectangulo/mesa 3.png';
    
            img2.onload = function () {
              
              ctx.drawImage(img2, 600, 320, 160, 100); 
            };
          };
        };
    
        drawImages();
    }, []);

    return (
        <div className='test-container'>
            <h1>Test Page</h1>
            <canvas id="canvas" ref={canvasRef} width="1200" height="600"></canvas>
            <button onClick={handleDownloadImage}>Descargar</button>
        </div>
    )
};
