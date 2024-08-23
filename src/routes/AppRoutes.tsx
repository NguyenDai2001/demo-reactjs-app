
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import ProFilePage from '../pages/ProFilePage';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/profile" element={<ProFilePage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
