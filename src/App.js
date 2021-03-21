import "./App.css";
import Home from "./components/Home";
import UseState from "./components/UseState";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="app container row">
        <Home />
        {/* <UseState /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
