import React from 'react';
import './Register.css';
import { NavLink } from "react-router-dom";

export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <div id="container-register">
                    <label className="label-register">First Name</label>
                    <input type="text" class="input-register" />
                    <label className="label-register">Last Name</label>
                    <input type="text" class="input-register" />
                    <label className="label-register">E-mail</label>
                    <input type="text" class="input-register" />
                    <label className="label-register"> Date of Birth</label>
                    <input type="date" class="input-register" />
                    <label className="label-register">Telephone</label>
                    <input type="text" class="input-register" />
                    <label className="label-register">Country</label>
                    <input type="text" class="input-register" />
                    <label className="label-register">Password</label>
                    <input type="password" class="input-register" />
                    <button className='button-register'>REGISTER</button>
                </div>
                <div class="paragraph-register">
                    <p>Or if you already have an account, <NavLink to="/" class="reg-link">Sign in.</NavLink></p>
                </div>


            </section>
        )
    }
}