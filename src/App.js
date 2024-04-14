import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home.js';
import About from "./pages/About.js"; 
import Cart from "./pages/Cart.js";
import Navigation from "./component/Navigation.js";
const App= () =>{
    return (
        <>
            <Router>
                <Navigation/>
                <Routes> 
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Router>
        </>
    )
} 
export default App;