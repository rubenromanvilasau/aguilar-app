const express = require('express');
const router = require('./src/routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

app.set('port', process.env.PORT || 3000);

app.use( '/api', router );

app.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${app.get('port')}`);
});
