import "assets/css/app.css";
import CartPage from "pages/CartPage";
import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import SuccessPage from "pages/SuccessPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categories/:idc/products/:id" element={<DetailPage />} />
                    <Route path="/carts" element={<CartPage />} />
                    <Route path="/checkout-success" element={<SuccessPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
