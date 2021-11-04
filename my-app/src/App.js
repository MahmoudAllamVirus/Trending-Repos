import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MasterContainer from './view/layout/Components/Master-Container/MasterContainer';
function App() {
  return (
    <div className="App">
      <Router>
        <MasterContainer />
      </Router>
    </div>
  );
}


export default App;
