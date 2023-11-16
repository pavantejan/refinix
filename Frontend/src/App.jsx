import { Route, Routes } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/LandingPage";
import DeveloperToolsPage from "./pages/DeveloperToolsPage";
import CodeConverterPage from "./pages/CodeConverter/CodeConverterPage";
import SourceLangPage from "./pages/CodeConverter/SourceLangPage";
import TargetLangPage from "./pages/CodeConverter/TargetLangPage";


// import {ComposerLanguagePage} from "./pages/CommentsComposer";

import { EditorCommentsComposer } from "./pages/CommentsComposer/EditorCommentsComposer";
import { ComposerLanguagePage } from "./pages/CommentsComposer/ComposerLanguagePage";
import { ExplainerLanguagePage } from "./pages/CodeExplainer/ExplainerLanguagePage";
import { CodeExplainerEditor } from "./pages/CodeExplainer/CodeExplainerEditor";
import { TestScenarioGenLanguage } from "./pages/TestScenarioGenerator/TestcaseGeneratorLangPage";
import { TestScenarioGenEditor } from "./pages/TestScenarioGenerator/TestcaseGeneratorEditor";
import OptimizerLanguagePage from "./pages/CodeOptimizer/OptimizerLanguagePage";
import CodeOptimizerEditor from "./pages/CodeOptimizer/CodeOptimizerEditor";
import HrProductivityTools from "./pages/HrProductivityTools";
import JobDescription from "./pages/JobDescriptionGenerator/JobDescription";
import InterviewAssistant from "./pages/EnhancedInterviewAssistant/InterviewAssistant";
// import {EditorCommentsComposer} from "./pages/CommentsComposer/EditorCommentsComposer";


function App() {
  return (
    <>
    <ToastContainer />
   <Routes>
    <Route path="/" element ={<LandingPage/>}/>
    <Route path="/developertools" element = {<DeveloperToolsPage/>} />
    <Route path="/hrproductivitytools" element = {<HrProductivityTools/>} />

{/* Job Description Generator Routes */}

    <Route path="/jobdescription/generator" element = {<JobDescription/>} />


{/* AI Interview Assistant Routes */}

<Route path="/interviewassistant/generator" element = {<InterviewAssistant/>} />


{/* Code Converter Routes */}

    <Route path="/codeconverter/sourcelanguage" element = {<SourceLangPage/>} />
    <Route path="/codeconverter/targetlanguage" element = {<TargetLangPage/>} />
    <Route path="/codeconverter/editor" element = {<CodeConverterPage/>} />
    
{/* Code optimizer Routes */}

    <Route path="/codeoptimizer/sourcelanguage" element = {<OptimizerLanguagePage/>} />
    <Route path="/codeoptimizer/editor" element = {<CodeOptimizerEditor/>} />


{/* Comment Composer Routes */}
    <Route path="/commentcomposer/editor" element = {<EditorCommentsComposer/>} />
    <Route path="/commentcomposer/chooselanguage" element = {<ComposerLanguagePage/>} />

  {/* Routes for Code Explainer */}
  <Route path="/codeexplainer/editor" element = {<CodeExplainerEditor/>} />
  <Route path="/codeexplainer/chooselanguage" element = {<ExplainerLanguagePage/>} />

  {/* Routes for Test Scenario Generator */}
  <Route path="/testcasegenerator/editor" element = {<TestScenarioGenEditor/>} />
  <Route path="/testcasegenerator/chooselanguage" element = {<TestScenarioGenLanguage/>} />
   </Routes>
   </>
  );
}

export default App;
