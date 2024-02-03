import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { login_check_style, post_login_data } from './login.js';
import { Context } from '../../../container/Context.jsx';
import './login.css';

const Login = ({ setLoginway }) => {

    const context = useContext(Context);
    const { setUser } = context;

    const navigate = useNavigate();

    const login_user = (e) => {
        e.preventDefault();

        let user_name_or_phone = document.getElementById('phone_or_username_input').value;
        let password = document.getElementById('password_input').value;

        post_login_data(user_name_or_phone, password, navigate, setUser);
    }

    return (
        <form className='login-area' onSubmit={(e) => login_user(e)}>
            <h2>Login</h2>
            <input type="text" id='phone_or_username_input' placeholder='نام کاربری یا شماره موبایل'
                onChange={login_check_style} />
            <input type="password" id='password_input' placeholder='رمز عبور'
                onChange={login_check_style} />

            <button className='login-btn' id='login_btn' disabled>ورود</button>
            <div>
                <span className='login-signup' onClick={() => navigate('/signplayer')}>ثبت نام</span>
                <span className='login-change-way' onClick={() => setLoginway(1)}>
                    ورود با کد تایید
                </span>
            </div>
        </form>
    )
};

export default Login;