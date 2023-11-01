const dotenv=require('dotenv');

dotenv.config();

const {
    API_PORT,
    API_KEY
}=process.env;
module.exports={
    API_PORT,
    API_KEY
}