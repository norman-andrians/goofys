import Navbar from "./components/navbar/navbar";
import Pricing from "./components/pages/pricing";
import navigation from "./data/navigation.json";
import "./assets/css/main.min.css";

const nav_data = navigation.navigation;

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar data={nav_data} />
      <Pricing />
    </div>
  );
}

export default App;
