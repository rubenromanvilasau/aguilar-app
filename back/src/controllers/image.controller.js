
class ImageController {

    generateImage = async (req, res) => {
        console.log('[generateImage]');
        res.send('Generate image endpoint');
    };

}

module.exports = ImageController;
