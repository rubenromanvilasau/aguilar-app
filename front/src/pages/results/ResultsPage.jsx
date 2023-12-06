import './results-page.scss';
import QRCode from 'react-qr-code';

export const ResultsPage = () => {
    return (
        <div className='results-container'>
            <img className='result-image' src="img/quincho.jpg" alt="quincho" />
            <div className="right-side">
                <h1>Ya estás participando por tu quincho soñado</h1>
                <span>Llevate tu diseño</span>
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>
        </div>    
    )
};