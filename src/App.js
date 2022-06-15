import '@/App.scss';
import { Header, MainContent, Footer } from '@/components/index';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import UserDetail from './components/MainContent/UserDetail/UserDetail';
function App() {
    const themeContext = useContext(ThemeContext);
    return (
        <div className={`App ${themeContext.theme}`}>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route exact path="/" element={<MainContent />} />
                    <Route path="/page/:pageNumber" element={<MainContent />} />
                    <Route path="/api" element={<UserDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
