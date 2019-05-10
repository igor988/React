import React from 'react';
import './Expenses.css';
import { NavLink } from "react-router-dom";

export class Expenses extends React.Component {
    render() {
        return (
            <section id="expenses">
                <div className="bottom-bar">
                    <p className="total">Total spent: 1205 den.</p>
                </div>

                <div className="second-header">

                    <div>
                        <h1>Expenses</h1>
                    </div>

                    <button className="monthly-button">MONTHLY</button>
                    <button className="yearly-button">YEARLY</button>

                    <span className="filter">
                        Choose Month
            <select id="month-select">
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april" selected="selected">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>

                    </span>

                </div>

                <table className="table">
                    <tr>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Product Description</th>
                        <th>Purchase Date</th>
                        <th>Product Price</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Coca-Cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>27.04.2019</td>
                        <td>75</td>
                        <td></td>
                    </tr>
                </table>

            </section>
        )
    }
}