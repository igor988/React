import React from 'react';
import './Portal.css';
import { NavLink, Route } from "react-router-dom";
import { Header } from '../Header/Header';
import { Products } from '../Products/Products';
import { NewProduct } from '../NewProduct/NewProduct';
import { Expenses } from '../Expenses/Expenses';

export class Portal extends React.Component {
    render() {
        return (
            <section id="portal">
               <Header />
               <Route path="/products" component={Products} />
               <Route path="/new-product" component={NewProduct} />
               <Route path="/expenses" component={Expenses}/>
            </section>
                )
            }
}