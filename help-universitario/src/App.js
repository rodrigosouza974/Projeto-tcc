import React from 'react';
import GlobalStyle from "./styles/global"; 
import RoutesApp from './routes';
import { AuthProvider } from "./contexts/auth";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";


const App = () => {
    return (
        <AuthProvider> 
            <Navbar/>
            <RoutesApp/>
            <GlobalStyle/>
            <Footer/>
        </AuthProvider> 
    );
};

export default App;
