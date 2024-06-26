import { useEffect, useState } from 'react';
import './results-page.scss';
import QRCode from 'react-qr-code';
import apiService from '../../services/api.service';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../../components/loading/Loading';

export const ResultsPage = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const { id } = useParams();

    const getImage = async() => {
        const response = await apiService.getImage(id);
        console.log({ response });

        var arrayBufferView = new Uint8Array( response.data );
        var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var url = urlCreator.createObjectURL( blob );

        console.log('url', url);
        setImage( url );
        setIsLoading( false );
    }

    useEffect(() => {
        console.log('id', id);
        getImage();

        const timer = setTimeout(() => {
            navigate('/thanks');
        }, 30000);

        return () => clearTimeout(timer);
    },[]);

    if( isLoading ) {
        return (
        <div className='results-container'>
            <Loading />
        </div>)
    }

    return (
        <div className='results-container'>
            <img className='result-image' src={image} alt="quincho" />
            <div className="right-side">
                <h1>Ya estás participando<br></br> por tu quincho soñado</h1>
                <span>Llevate tu diseño escaneando el QR</span>
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={`${import.meta.env.BACKEND_URI}/download-image/${id}`}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <span style={{ width: '300px', textAlign: 'center', fontSize: '.6rem'}}>escanea el qr, consigue tu diseño,<br></br> quieres más posibilidades de ganar?<br></br> comparte el diseño en tus redes sociales etiquetándonos y tendrás el doble de posibilidades de ganar.</span>
            </div>
        </div>    
    )
};