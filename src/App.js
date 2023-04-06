import Navbar from "./components/navbar/navbar";
import navigation from "./data/navigation.json";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main.css"

const nav_data = navigation.navigation;

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar data={nav_data} />
    </div>
  );
}

export default App;
