import React, { useState }  from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_PROFILE } from '../utils/mutations';

const Profile = () => {

  const [country, setCountry] = useState('');
  const [arrivedAt, setArrivedAt] = useState('');
  const [speak, setSpeak] = useState('');
  const [livesIn, setLivesIn] = useState('');

  const [addProfile] = useMutation(ADD_PROFILE);

    const {data, loading} = useQuery(QUERY_ME)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const { data } = await addProfile({
            variables: {
              country,
              arrivedAt,
              speak,
              livesIn
            },
          });
          
          setCountry('');
          setArrivedAt('');
          setSpeak('');
          setLivesIn('');
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      };
    

    if(loading || !data?.me) {
        return (<div>Profile loading</div>)
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <form onSubmit={handleFormSubmit}>
                    {/* <label className="block mt-3">
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
                            onChange={(event) => { setCountry(event.target.value) }}
                            placeholder="email" />
                    </label> */}
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
                            onChange={(event) => { setCountry(event.target.value) }}
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
                            onChange={(event) => { setArrivedAt(event.target.value) }}
                          
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
                            onChange={(event) => { setSpeak(event.target.value) }}
                          
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
                            onChange={(event) => { setLivesIn(event.target.value) }}
                          
                            placeholder="suburb" />
                    </label>
                    <button className="
                    bg-blue-400 rounded-md
                    w-full mt-5 h-10 block
                   hover:bg-blue-500 font-medium"
                        type="submit"
                    >Edit Profile
                    </button>
                    </form>
        </div>
    )
}

export default Profile;


