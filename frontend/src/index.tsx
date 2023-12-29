import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import css from './index.module.css'
import Statistics from "./components/Statistics/Statistics";
import {BikeForm} from "./components/BikeForm/BikeForm";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Header/>
        <div id={css.main}>
            <div>Bikes</div>
            <div>
                <BikeForm/>
                <Statistics/>
            </div>
        </div>
        <Footer/>
    </>
);
