import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar"
import Wrapper from "./components/wrapper/Wrapper"
import Portfolio from "./pages/portfolio"
import About from "./pages/about"
import Contact from "./pages/contact"




function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Wrapper>

            </div>
        </Router>
    );
}

export default App;