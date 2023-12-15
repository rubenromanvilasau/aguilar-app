import { EnvironmentCanvas } from '../../../../components';

import './environment.scss';

const environmentsImages = [
    {
        id: 1,
        folder: 'cielo',
        options: [
            {
                id: 1,
                name: 'madera.png',
                price: 1256000,
                icon: 'img/cielo/icons/madera.png',
                cuadradoheight: 462,
                cuadradowidth: 265,
                Lheight: 462,
                Lwidth: 246,
                rectanguloheight: 460,
                rectangulowidth: 248,
                cuadradox: 50,
                cuadradoy: -17,
                Lx: 128,
                Ly: -13,
                rectangulox: 117,
                rectanguloy: -12,

                rescuadradoheight: 710,
                rescuadradowidth: 745,
                rescuadradox: 140,
                rescuadradoy: -50,

                resLheight: 710,
                resLwidth: 680,
                resLx: 360,
                resLy: -45,

                resrectanguloheight: 716,
                resrectangulowidth: 666,
                resrectangulox: 343,
                resrectanguloy: -45,
            },
            {
                id: 2,
                name: 'panel.png',
                price: 839990,
                icon: 'img/cielo/icons/panel.png',
                cuadradoheight: 462,
                cuadradowidth: 265,
                Lheight: 462,
                Lwidth: 246,
                rectanguloheight: 460,
                rectangulowidth: 248,
                cuadradox: 50,
                cuadradoy: -17,
                Lx: 128,
                Ly: -13,
                rectangulox: 117,
                rectanguloy: -12,

                rescuadradoheight: 710,
                rescuadradowidth: 745,
                rescuadradox: 140,
                rescuadradoy: -50,

                resLheight: 710,
                resLwidth: 680,
                resLx: 360,
                resLy: -45,

                resrectanguloheight: 716,
                resrectangulowidth: 666,
                resrectangulox: 343,
                resrectanguloy: -45,
            },
            {
                id: 3,
                name: 'teja.png',
                price: 2772000,
                icon: 'img/cielo/icons/teja.png',
                cuadradoheight: 462,
                cuadradowidth: 265,
                Lheight: 462,
                Lwidth: 246,
                rectanguloheight: 460,
                rectangulowidth: 248,
                cuadradox: 50,
                cuadradoy: -17,
                Lx: 128,
                Ly: -13,
                rectangulox: 117,
                rectanguloy: -12,

                rescuadradoheight: 710,
                rescuadradowidth: 745,
                rescuadradox: 140,
                rescuadradoy: -50,

                resLheight: 710,
                resLwidth: 680,
                resLx: 360,
                resLy: -45,

                resrectanguloheight: 716,
                resrectangulowidth: 666,
                resrectangulox: 343,
                resrectanguloy: -45,
            },
            {
                id: 4,
                name: 'zinc.png',
                price: 945000,
                icon: 'img/cielo/icons/zinc.png',
                cuadradoheight: 462,
                cuadradowidth: 265,
                Lheight: 462,
                Lwidth: 246,
                rectanguloheight: 460,
                rectangulowidth: 248,
                cuadradox: 50,
                cuadradoy: -17,
                Lx: 128,
                Ly: -13,
                rectangulox: 117,
                rectanguloy: -12,

                rescuadradoheight: 710,
                rescuadradowidth: 745,
                rescuadradox: 140,
                rescuadradoy: -50,

                resLheight: 710,
                resLwidth: 680,
                resLx: 360,
                resLy: -45,

                resrectanguloheight: 716,
                resrectangulowidth: 666,
                resrectangulox: 343,
                resrectanguloy: -45,
            }
        ]
    },
    {
        id: 2,
        folder: 'paredes',
        options: [
            {
                id: 1,
                name: 'gris.png',
                price: 772000,
                icon: 'img/paredes/icons/pintura.png',
                cuadradoheight: 155,
                cuadradowidth: 185,
                Lheight: 94,
                Lwidth: 141,
                rectanguloheight: 112,
                rectangulowidth: 230,
                cuadradox: 110,
                cuadradoy: 140,
                Lx: 165,
                Ly: 173,
                rectangulox: 126,
                rectanguloy: 158,

                rescuadradoheight: 208,
                rescuadradowidth: 515,
                rescuadradox: 305,
                rescuadradoy: 200,

                resLheight: 135,
                resLwidth: 399,
                resLx: 457,
                resLy: 240,

                resrectanguloheight: 160,
                resrectangulowidth: 645,
                resrectangulox: 350,
                resrectanguloy: 220,
            },
            {
                id: 2,
                name: 'ladrillo.png',
                price: 1256000,
                icon: 'img/paredes/icons/ladrillo.png',
                cuadradoheight: 155,
                cuadradowidth: 185,
                Lheight: 94,
                Lwidth: 141,
                rectanguloheight: 112,
                rectangulowidth: 230,
                cuadradox: 110,
                cuadradoy: 140,
                Lx: 165,
                Ly: 173,
                rectangulox: 126,
                rectanguloy: 158,

                rescuadradoheight: 208,
                rescuadradowidth: 515,
                rescuadradox: 305,
                rescuadradoy: 200,

                resLheight: 135,
                resLwidth: 399,
                resLx: 457,
                resLy: 240,

                resrectanguloheight: 160,
                resrectangulowidth: 645,
                resrectangulox: 350,
                resrectanguloy: 220,
            },
            {
                id: 3,
                name: 'madera.png',
                price: 939990,
                icon: 'img/paredes/icons/madera.png',
                cuadradoheight: 155,
                cuadradowidth: 185,
                Lheight: 94,
                Lwidth: 141,
                rectanguloheight: 112,
                rectangulowidth: 230,
                cuadradox: 110,
                cuadradoy: 140,
                Lx: 165,
                Ly: 173,
                rectangulox: 126,
                rectanguloy: 158,

                rescuadradoheight: 208,
                rescuadradowidth: 515,
                rescuadradox: 305,
                rescuadradoy: 200,

                resLheight: 135,
                resLwidth: 399,
                resLx: 457,
                resLy: 240,

                resrectanguloheight: 160,
                resrectangulowidth: 645,
                resrectangulox: 350,
                resrectanguloy: 220,
            },
            {
                id: 4,
                name: 'piedra.png',
                price: 2945000,
                icon: 'img/paredes/icons/piedra.png',
                cuadradoheight: 155,
                cuadradowidth: 185,
                Lheight: 94,
                Lwidth: 141,
                rectanguloheight: 112,
                rectangulowidth: 230,
                cuadradox: 110,
                cuadradoy: 140,
                Lx: 165,
                Ly: 173,
                rectangulox: 126,
                rectanguloy: 158,

                rescuadradoheight: 208,
                rescuadradowidth: 515,
                rescuadradox: 305,
                rescuadradoy: 200,

                resLheight: 135,
                resLwidth: 399,
                resLx: 457,
                resLy: 240,

                resrectanguloheight: 160,
                resrectangulowidth: 645,
                resrectangulox: 350,
                resrectanguloy: 220,
            },
        ]
    },
    {
        id: 3,
        folder: 'piso',
        options: [
            {
                id: 1,
                name: 'cemento.png',
                price: 1339990,
                icon: 'img/piso/icons/cemento.png',
                cuadradoheight: 71,
                cuadradowidth: 225,
                Lheight: 60,
                Lwidth: 146,
                rectanguloheight: 432,
                rectangulowidth: 250,
                cuadradox: 68,
                cuadradoy: 255,
                Lx: 160,
                Ly: 245,
                rectangulox: 116,
                rectanguloy: -1,

                rescuadradoheight: 95,
                rescuadradowidth: 640,
                rescuadradox: 190,
                rescuadradoy: 358,

                resLheight: 82,
                resLwidth: 402,
                resLx: 454,
                resLy: 343,

                resrectanguloheight: 600,
                resrectangulowidth: 705,
                resrectangulox: 318,
                resrectanguloy: 0,
            },
            {
                id: 2,
                name: 'ceramica.png',
                price: 2256000,
                icon: 'img/piso/icons/ceramica.png',
                cuadradoheight: 71,
                cuadradowidth: 225,
                Lheight: 60,
                Lwidth: 146,
                rectanguloheight: 432,
                rectangulowidth: 250,
                cuadradox: 68,
                cuadradoy: 255,
                Lx: 160,
                Ly: 245,
                rectangulox: 116,
                rectanguloy: -1,


                rescuadradoheight: 95,
                rescuadradowidth: 640,
                rescuadradox: 190,
                rescuadradoy: 358,

                resLheight: 82,
                resLwidth: 402,
                resLx: 454,
                resLy: 343,

                resrectanguloheight: 600,
                resrectangulowidth: 705,
                resrectangulox: 318,
                resrectanguloy: 0,
            },
            {
                id: 3,
                name: 'ladrillo.png',
                price: 4772000,
                icon: 'img/piso/icons/ladrillo.png',
                cuardradoheight: 71,
                cuadradowidth: 225,
                Lheight: 60,
                Lwidth: 146,
                rectanguloheight: 432,
                rectangulowidth: 250,
                cuadradox: 68,
                cuadradoy: 255,
                Lx: 160,
                Ly: 245,
                rectangulox: 116,
                rectanguloy: -1,


                rescuadradoheight: 95,
                rescuadradowidth: 640,
                rescuadradox: 190,
                rescuadradoy: 358,

                resLheight: 82,
                resLwidth: 402,
                resLx: 454,
                resLy: 343,

                resrectanguloheight: 600,
                resrectangulowidth: 705,
                resrectangulox: 318,
                resrectanguloy: 0,
            },
            {
                id: 4,
                name: 'parque.png',
                price: 3945000,
                icon: 'img/piso/icons/parque.png',
                cuadradoheight: 71,
                cuadradowidth: 225,
                Lheight: 60,
                Lwidth: 146,
                rectanguloheight: 432,
                rectangulowidth: 250,
                cuadradox: 68,
                cuadradoy: 255,
                Lx: 160,
                Ly: 245,
                rectangulox: 116,
                rectanguloy: -1,


                rescuadradoheight: 95,
                rescuadradowidth: 640,
                rescuadradox: 190,
                rescuadradoy: 358,

                resLheight: 82,
                resLwidth: 402,
                resLx: 454,
                resLy: 343,

                resrectanguloheight: 600,
                resrectangulowidth: 705,
                resrectangulox: 318,
                resrectanguloy: 0,
            }
        ]
    },
];

export const ChooseEnvironment = ({ room, environmentMaterials, setEnvironmentMaterials, nextStep, decrementBudget }) => {

    const handleOptionClick = ( environment, option ) => {
        // if( environmentMaterials[environment.folder].image_url === `img/${environment.folder}/${room.name}/${option.name}` ) {
        //     return;
        // }
        setEnvironmentMaterials(prevOptions => ({
            ...prevOptions,
            [environment.folder]: {...option, image_url : `img/${environment.folder}/${room.name}/${option.name}`},
        }));

    }

    const onClickNext = () => {
        nextStep();
        const prices = Object.values(environmentMaterials)
                            .map(item => item.price)
                            .reduce((a, b) => a + b, 0);
                            
        decrementBudget( prices );
    }
    
    return (
        <div className="environment-container">
            <div className="environment-options">
                { environmentsImages.map( environment => (
                    <EnvironmentCanvas
                        key={environment.id}
                        room={room}
                        environment={environment}
                        options={environment.options}
                        environmentMaterials={environmentMaterials}
                        handleOptionClick={handleOptionClick}
                    />
                ))
                }
            </div>
            <div className="btn-container">
                <button
                    className="next-button"
                    onClick={onClickNext}
                    disabled={ Object.keys( environmentMaterials ).length !== 3 }
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
};