import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import css from './index.module.css'
import Statistics from "./components/Statistics/Statistics";
import {BikeForm} from "./components/BikeForm/BikeForm";
import Bikes from "./components/Bikes/Bikes";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Pagination from "./components/Pagination/Pagination";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <>
            <Header/>
            <div id={css.main}>
                <div id={css.bikes}>
                    <Bikes/>
                    {/*<Pagination/>*/}
                </div>
                <div id={css.form_stat}>
                    <BikeForm/>
                    <Statistics/>
                </div>
            </div>
            <Footer/>
        </>
    </Provider>
);
