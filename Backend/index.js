const express = require('express');
const fileUpload = require('express-fileupload');
const { API_PORT } = require('./Constant');
const code_conversion_router = require('./Routes/CodeConversion.router');
const codeExplanationRouter = require('./Routes/CodeExplanation.router');
const commentComposerRouter = require('./Routes/CommentComposer.router');
const code_optimizer_router = require('./Routes/CodeOptimizer.router');

const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(fileUpload())


app.use("/codeconversion", code_conversion_router)
app.use('/commentcomposer', commentComposerRouter);
app.use('/codeexplanation', codeExplanationRouter);
app.use("/codeoptimizer",code_optimizer_router);


app.listen(API_PORT, () => {
    console.log('Server is running on port', API_PORT);

})
