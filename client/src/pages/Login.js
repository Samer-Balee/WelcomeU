import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div className='container w-1/3 mx-auto'>
            <h2 className="text-3xl font-bold mt-5 mb-4">Login</h2>
            <hr />

            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">Email</span>
                        <input className="
                            mt-3
                             block
                            w-full
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="email"
                            type="email"
                            placeholder="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block mt-3">
                        <span className="text-gray-700 mt-3 font-medium">Password</span>
                        <input className="
                            mt-2
                            block
                            w-full
                            rounded-md
                            bg-gray-100
                            border-transparent
                            focus:border-gray-500 focus:bg-white focus:ring-0"
                            placeholder="password"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="
                            bg-blue-400 rounded-md
                            w-full mt-5 h-10 block
                            hover:bg-blue-500 font-medium"
                        type="submit"
                    >login
                    </button>
                    <div className="flex flex-row justify-between mt-4">
                        <span className="text-gray-700 mt-3 font-medium">Don't have account?</span>
                        <Link to='/signup '>
                            <button className="
                            bg-green-400 rounded-md
                            w-60 mt-3 h-10 block
                            hover:bg-green-200 font-medium"
                            >
                                signup
                            </button>
                        </Link>
                    </div>
                </form>
            )}

            {error && (
                <div className="my-3 p-3">
                    {error.message}
                </div>
            )}
        </div>
    )
}

export default Login;
