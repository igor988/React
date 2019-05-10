import React from 'react';
import './NewProduct.css';
import { NavLink } from "react-router-dom";


export class NewProduct extends React.Component {
    render() {
        return (
            <section id="new-product">

                <div className="second-header-create">
                    <h1>New Product</h1>
                </div>

                <div className="wrapper-create">
                    <div className="left-create">
                        <form>
                            <label className="label-create">Product Name</label>
                            <input type="text" className="input-create" />
                            <label className="label-create">Product Description</label>
                            <input type="text" className="input-create" />
                            <label className="label-create">Product Type</label>
                            <input type="text" className="input-create" />
                            <label className="label-create">Purchase Date</label>
                            <input type="text" className="input-create" />
                            <label className="label-create">Product Price</label>
                            <input type="text" className="input-create" />
                            <button className="button-create">CREATE PRODUCT</button>
                        </form>
                    </div>
                    <div className="right-create">
                        <div className="logotext-create">
                            <span className="logo-size-create"><i className="fas fa-plus-circle"></i></span>

                            <p className="text-create">You are creating a new product</p>
                        </div>


                    </div>

                </div>

            </section>
        )
    }
}