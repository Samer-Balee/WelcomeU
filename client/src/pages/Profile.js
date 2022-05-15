import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
    const {data, loading} = useQuery(QUERY_ME)

    if(loading || !data?.me) {
        return (<div>Profile loading</div>)
    }



    return (
        <div className='container w-1/3 mx-auto'>
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
                            value={data.me.email}
                            onChange={()=>{
                                // here should api call to update profile email
                            }}
                            placeholder="email" />
                    </label>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">Country</span>
                        <input className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="country"
                            type="text"
                            value={data.me.country}
                            onChange={()=>{
                                // here should api call to update profile email
                            }}
                            placeholder="country" />
                    </label>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">Arrived at</span>
                        <input className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="arrivedAt"
                            type="text"
                            value={data.me.arrivedAt}
                            onChange={()=>{
                                // here should api call to update profile email
                            }}
                            placeholder="month/year" />
                    </label>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">Speak</span>
                        <input className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="speak"
                            type="text"
                            value={data.me.speak}
                            onChange={()=>{
                                // here should api call to update profile email
                            }}
                            placeholder="language" />
                    </label>
                    <label className="block mt-3">
                        <span className="text-gray-700 font-medium">Lives in</span>
                        <input className="
                    mt-3
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
                            name="livesIn"
                            type="text"
                            value={data.me.livesIn}
                            onChange={()=>{
                                // here should api call to update profile email
                            }}
                            placeholder="suburb" />
                    </label>
                    <button className="
                    bg-blue-400 rounded-md
                    w-full mt-5 h-10 block
                   hover:bg-blue-500 font-medium"
                        type="submit"
                    >Edit Profile
                    </button>
        </div>
    )
}

export default Profile;


