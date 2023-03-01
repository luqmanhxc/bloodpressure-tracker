import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages, components
import Home from './pages/Home';
import Navbar from './components/Navbar';

// material ui
import Container from '@mui/material/Container';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Container maxWidth="md">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
};

export default App;
