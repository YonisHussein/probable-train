import Header from "./components/Header";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <div>
            <h1>Hello React!</h1>
            <Header/>
            <Navigation/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default App;