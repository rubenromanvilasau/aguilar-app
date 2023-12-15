import { useEffect, useState } from 'react';
import './download-image.scss';
import apiService from '../../services/api.service';
import { useParams } from 'react-router-dom';

export const DownloadImagePage = () => {
    const { id } = useParams();
    const [image, setImage] = useState( null );

    const getImage = async( id ) => {
        const response = await apiService.getImage( id );
        console.log({ response });

        var arrayBufferView = new Uint8Array( response.data );
        var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var url = urlCreator.createObjectURL( blob );

        console.log('url', url);
        setImage( url );
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image;
        link.download = `image_${id}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        console.log('id', id)
        getImage(id);
    },[]);

    return (
        <div className='download-container'>
            <img src={ image } alt="result image" />
            <button
                onClick={ handleDownload }
            >
                Descargar
            </button>
        </div>
    )
};