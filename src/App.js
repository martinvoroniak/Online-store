import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <div>
                <Route path='/' component={Home} exact />
                <Route path='/cart' component={Cart} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
