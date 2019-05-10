import React from 'react';
import './Header.css';
import Avatar from '../../assets/images/Igor.jpg';
import { NavLink } from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div id="top-header">
                    <button className="button-products"><NavLink to="/products">PRODUCTS</NavLink></button>
                    <button className="button-expenses"><NavLink to="/expenses">EXPENSES</NavLink></button>

                    <div className="user-pic-container">

                        <img src={Avatar} />
                        <div className="username">
                            Igor Jovanovski
                        </div>
                        


                    </div>
                </div>
            </section>
        )
    }
}