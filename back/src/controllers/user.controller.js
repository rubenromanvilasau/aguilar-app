const fs = require('fs');
const path = require('path');
const usersCSV = path.join(__dirname, '../../', 'users.csv');


class UserController {

    saveUser(req, res) {
        const { name, email, phone } = req.body;

        if( !name || !email || !phone ) {
            res.status(400).send({ status: 'error', message: 'Missing parameters' });
            return;
        }
        
        fs.appendFile(usersCSV, `${ name },${ email },${ phone }\n`, { flag: 'a+', encoding: 'utf8' }, (err) => {
            if( err ) {
                console.log('Error saving user', err)
                res.status(500).send({ status: 'error', message: 'Error saving user' });
                return;
            }
            
            console.log('[saveUser] successfully', { name, email, phone });
            res.status(200).send({ status: 'ok', message: 'User saved successfully'});
        });

    }
}

module.exports = UserController;