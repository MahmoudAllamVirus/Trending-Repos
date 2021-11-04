import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import MasterContainer from './view/layout/Components/Master-Container/MasterContainer';
function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <MasterContainer />
        </main>
      </Router>
    </div>
  );
}


export default App;
