import "./assets/css/styles.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home__container">
        <Posts />
        <div className="right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, modi.</div>
      </div>
    </div>
  );
}

export default App;
