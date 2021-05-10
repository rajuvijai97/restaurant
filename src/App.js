import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

export default function App(props) {
    return(
        <BrowserRouter>
            <Header />
            <Route exact path="/home" component={props.home} />
            <Route exact path="/home/:restaurant" component={props.restaurant} />
            <Footer />
        </BrowserRouter>
    )
}