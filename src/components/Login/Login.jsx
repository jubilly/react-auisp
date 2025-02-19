import React, { useState } from 'react';
import {
    Actions,
    ActionRemember,
    ActionCreate,
    SignIn,
    Wrapper,
} from './styles';
import { session, validateEmail, validatePassword } from '../../utils';
import { Header, Form } from '../';

function Login() {
    const [rememberUser, setRememberUser] = useState(false);

    function validateForm(email, password) {
        return validateEmail(email) && validatePassword(password);
    }

    const handleLogin = (event) => {
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const remember = rememberUser;

        if (!validateForm(email, password)) {
            return;
        }

        const id = Math.floor(Math.random() * 100);

        const user = {
            id,
            email,
            password,
            remember: remember,
        };
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('login-user', JSON.stringify(user));
            window.location.href = './exams';
        }
    };

    const formInputs = [
        {
            label: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'exame@gmail.com',
            required: true,
            htmlFor: 'email',
        },
        {
            label: 'Password',
            type: 'password',
            name: 'password',
            placeholder: 'Senha',
            required: true,
            htmlFor: 'password',
        },
    ];

    const FormExtraActions = () => {
        return (
            <Actions>
                <ActionRemember>
                    <label className="text" htmlFor="remember">
                        Lembre de mim
                    </label>
                    <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        onChange={() => setRememberUser(!rememberUser)}
                    />
                </ActionRemember>
                <div className="action-forgot-password">
                    <a className="text text__highlight" href="/">
                        Esqueceu a senha?
                    </a>
                </div>
            </Actions>
        );
    };

    return (
        <Wrapper>
            <Header />
            <SignIn>
                <ActionCreate>
                    <a className="link text" href="/">
                        Não tem uma conta?{' '}
                        <span className="text__highlight">Crie agora</span>
                    </a>
                </ActionCreate>
                <Form
                    name="login"
                    inputs={formInputs}
                    handleOnSubmit={handleLogin}
                    ExtraHtml={FormExtraActions}
                    buttonLabel="Entrar"
                />
            </SignIn>
        </Wrapper>
    );
}

export default Login;
