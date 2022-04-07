import './App.css';
import './Components/Dashboard/DashboardUI'
import 'bulma/css/bulma.css';
import DashboardUI from "./Components/Dashboard/DashboardUI";

function App() {
  return (
    <div className="App">
        <div className="App-header">
            <h1 className="title">DASHBOARD</h1>
            <DashboardUI />
    </div>
    </div>
  );
}

export default App;
