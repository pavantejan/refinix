const express = require('express');
const fileUpload = require('express-fileupload');
const { API_PORT } = require('./Constant');

const app = express();
const cors = require('cors');
const job_description_router = require('./Routes/HR_Tools/JobDescription.router');
const code_conversion_router = require('./Routes/Developer_Tools/CodeConversion.router');
const commentComposerRouter = require('./Routes/Developer_Tools/CommentComposer.router');
const code_optimizer_router = require('./Routes/Developer_Tools/CodeOptimizer.router');
const codeExplanationRouter=require('./Routes/Developer_Tools/CodeExplanation.router');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(fileUpload())


/***************** Developer Tools Routes  *****************************/
app.use("/codeconversion", code_conversion_router)
app.use('/commentcomposer', commentComposerRouter);
app.use('/codeexplanation', codeExplanationRouter);
app.use("/codeoptimizer",code_optimizer_router);

/***************** HR Tools Routes **************************/

app.use('/jobdescription',job_description_router);


app.listen(API_PORT, () => {
    console.log('Server is running on port', API_PORT);

})
