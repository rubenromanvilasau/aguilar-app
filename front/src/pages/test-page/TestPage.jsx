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
          img1.src = 'img/quincho.webp';
    
          img1.onload = function () {
            // Dibujar la primera imagen en el canvas
            ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);
    
            // Cargar la segunda imagen
            const img2 = new Image();
            img2.src = 'img/bbq.png';
    
            img2.onload = function () {
              // Dibujar la segunda imagen en el canvas, superponiéndola sobre la primera
              ctx.drawImage(img2, 200, 200, 200, 200); // Ajusta las coordenadas y el tamaño según tus necesidades
            };
          };
        };
    
        drawImages();
    }, []);

    return (
        <div className='test-container'>
            <h1>Test Page</h1>
            <canvas id="canvas" ref={canvasRef} width="600" height="600"></canvas>
            <button onClick={handleDownloadImage}>Descargar</button>
        </div>
    )
};
