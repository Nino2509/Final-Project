  
import "./App.css";
import Quiz from "./components/quiz";
import Home from "./components/Home";
import History from "./components/History";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exat component={Quiz} />
      <Route path="/history" exat component={History} />
    </Router>
  );
}

export default App;