const fs = require('fs');
class ImageController {

    getImage = async (req, res) => {
        const { id } = req.params;
        const imagesDirectory = './images'; // Ajusta la ruta según la ubicación real de tu carpeta de imágenes
        const filename = `${id}.png`;
        const path = `${imagesDirectory}/${filename}`;
      
        if (fs.existsSync(path)) {
          console.log('path', path);
          res.sendFile(path, { root: process.cwd() }); // Utiliza process.cwd() para establecer la ruta raíz del proceso
        } else {
          console.log('path', path);
          res.status(404).json({ message: 'Imagen no encontrada.' });
        }
      };

    saveImage = async (req, res) => {
        const imageDataURL = req.body.imageDataURL;
        const base64Data = imageDataURL.replace(/^data:image\/png;base64,/, '');

        const filename = `image_${Date.now()}.png`;
        
        const imagesDirectory = './images';
        if (!fs.existsSync(imagesDirectory)) {
            fs.mkdirSync(imagesDirectory);
        }

        fs.writeFileSync(`./${imagesDirectory}/${filename}`, base64Data, 'base64');

        const fileId = filename.split('.')[0];

        res.status(200).json({ message: 'Imagen guardada con éxito.', id: fileId });
    };

}

module.exports = ImageController;
