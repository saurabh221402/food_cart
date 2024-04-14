//import ReactDOM from "react-dom";
import App from './App.js';
import {createRoot} from "react-dom/client";
//ReactDOM.render(<>(component) what to show</> ,where to show);
// ReactDOM.render(
//     <h1><App/></h1>,
//     document.getElementById("root")
// );
createRoot(document.getElementById("root")).render(<App/>);