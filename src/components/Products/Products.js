import React from 'react';
import './Products.css';
import '../../assets/images/edit.svg';
import '../../assets/images/trash-alt.svg';
import { NavLink } from "react-router-dom";


export class Products extends React.Component {
    render() {
        return (
            <section id="products">  
                <div className="second-header">
                    <h1>Products</h1>

                    <div className="filter">
                        Filter by:
                        <select id="filter-select">
                            <option value="year">Year</option>
                            <option value="highest-price">Highest Price</option>
                            <option value="lowest-price">Lowest Price</option>
                            <option value="latest-purchases">Latest Purchases</option>
                        </select>
                    </div>
                </div>

                <div className="bottom-buttons">
                    <button className="new-calc"><NavLink to="/new-calculation">NEW CALCULATION</NavLink></button><br/>
                    <button className="new-product"><NavLink to="/new-product">NEW PRODUCT</NavLink></button>
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
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                        <tr>
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>27.04.2019</td>
                            <td>75</td>
                            <td id="icons"><i className="far fa-edit"></i>&ensp;&ensp;<a href="./Delete.html"><i className="far fa-trash-alt"></i></a></td>

                        </tr>
                    </table>
                
            </section>
                )
            }
}