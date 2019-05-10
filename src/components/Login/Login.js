import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';


export class Login extends React.Component {
    render() {
        return (
            <section id="login">
                <div id="container-login">
                    <form>
                        <label className="label-login">E-mail</label>
                        <input type="text" class="input-login" />
                        <label className="label-login">Password</label>
                        <input type="password" class="input-login" />
                        <button className='button-login'>SIGN IN</button>
                    </form>
                </div>
                <div class="paragraph-login">
                    <p>Or if you don't have an account,<NavLink to="/register" class="reg-link">Register.</NavLink></p>
                </div>
            </section>
        )
    }
}