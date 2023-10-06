import { BrowserRouter as Router } from "react-router-dom";
import RoutesOfPage from "./routes";
import history from "./services/history";

import "./styles/styles.css";

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <RoutesOfPage />
            </Router>
        </div>
    );
}

export default App;
