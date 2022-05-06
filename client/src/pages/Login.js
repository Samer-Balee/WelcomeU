import React from 'react';

const Login = () => {
    return (
        <div className='container w-1/3 mx-auto'>
            <h2 className="text-3xl font-bold mt-5 mb-4">Login</h2>
            <hr/>
            <label className="block mt-3">
                <span className="text-gray-700 font-medium">Email</span>
                <input type="text" className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="email" />
            </label>
            <label className="block mt-3">
                <span className="text-gray-700 mt-3 font-medium">Password</span>
                <input type="password" className="
                    mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="password" />
            </label>
            <button className="
                    bg-blue-400 rounded-md
                    w-full mt-5 h-10 block
                   hover:bg-blue-500 font-medium
                   ">login
            </button>
            <div className="flex flex-row justify-between mt-4">
                <span className="text-gray-700 mt-3 font-medium">Don't have account?</span>
                <button className="
                    bg-rose-400 rounded-md
                    w-60 mt-3 h-10 block
                   hover:bg-rose-300 font-medium
                   ">signup
                </button>
            </div>
        </div>
    )
}

export default Login;