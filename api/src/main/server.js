require('dotenv').config()
const app = require('../config/app');

app.listen(process.env.API_PORT || 3000, () => console.log('Magic happnes on 3000'));
