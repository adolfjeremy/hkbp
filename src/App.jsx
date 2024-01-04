import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";

import "./style/style.scss";

function App() {
    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );
}

export default App;
