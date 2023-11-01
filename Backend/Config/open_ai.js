const OpenAIApi=require('openai');
const { OPENAI_API_KEY } = require('../Constant');

const openaiconfig = new OpenAIApi({
    apiKey: OPENAI_API_KEY
});


module.exports=openaiconfig;