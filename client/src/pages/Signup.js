import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

    // update state based on form input changes
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
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div className='container w-1/3 mx-auto'>
            <h2 className="text-3xl font-bold mt-5 mb-4">Signup</h2>
            <hr />
            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">username</span>
                        <input className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="username"
                            type="text"
                            value={formState.username}
                            onChange={handleChange}
                            placeholder="username"
                        />
                    </label>
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
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="email" />
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
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                            placeholder="password" />
                    </label>
                    <button className="
                    bg-blue-400 rounded-md
                    w-full mt-5 h-10 block
                   hover:bg-blue-500 font-medium"
                        type="submit"
                    >signup
                    </button>
                    <div className="flex flex-row justify-between mt-4">
                        <span className="text-gray-700 mt-3 font-medium">Have account?</span>
                        <Link to='/login '>
                            <button className="
                    bg-green-400 rounded-md
                    w-60 mt-3 h-10 block
                   hover:bg-green-300 font-medium"

                            >login
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

export default Signup;