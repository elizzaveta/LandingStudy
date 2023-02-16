import './App.css';
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Landing/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
