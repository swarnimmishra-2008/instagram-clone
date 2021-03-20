import "./assets/css/styles.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home__container">
        <Posts />
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
