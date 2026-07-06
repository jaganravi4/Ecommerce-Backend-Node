const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    FAKE_STORE_URL: process.env.FAKE_STORE_URL,
}