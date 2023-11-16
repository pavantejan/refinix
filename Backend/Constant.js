const dotenv=require('dotenv');

dotenv.config();

const {
    API_PORT,
    OPENAI_API_KEY
}=process.env;
module.exports={
    API_PORT,
    OPENAI_API_KEY
}