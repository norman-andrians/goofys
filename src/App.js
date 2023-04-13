import Navbar from "./components/navbar/navbar";
import Pricing from "./components/pages/pricing";
import Footer from "./components/footer";

import navigation from "./data/navigation.json";

import "./assets/css/main.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

const nav_data = navigation.navigation;

function App() {
  return (
    <div className="App bg-dark text-white">
      <Navbar data={nav_data} />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
