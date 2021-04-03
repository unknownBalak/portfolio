import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Project from "./components/Project";
// import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="app container row">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            {/* <Route path="/contact">
              <Contact /> */}
            {/* </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
