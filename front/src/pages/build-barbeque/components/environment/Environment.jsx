import './environment.scss';

const environmentsImages = [
    {
        url: 'img/environments/env-1.png',
    },
    {
        url: 'img/environments/env-2.png',
    },
    {
        url: 'img/environments/env-3.png',
    }
];

export const Environment = () => {
    return (
        <div className="environment-container">
            { environmentsImages.map( image => (
                <div key={image.url} className="environment">
                    <img src={image.url} alt="environment" />
                    <div className="env-options">
                        <div className="option"></div>
                        <div className="option current"></div>
                        <div className="option"></div>
                    </div>
                </div>
            ))

            }

        </div>
    )
};