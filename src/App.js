import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/main-page/MainPage';
import Footer from './components/Footer/Footer';
import OurHistory from './components/history/OurHistory';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/history">
            <OurHistory />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
