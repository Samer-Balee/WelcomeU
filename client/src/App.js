import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Profile from './pages/Profile';
import UserDetails from './components/UserDetails';
import SinglePost from './pages/singlePost';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/me"
                                element={<Profile />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/signup"
                                element={<Signup />}
                            />
                            <Route
                                path="/userdetails/:username"
                                element={<UserDetails />}
                            />
                            <Route
                                path="/posts/:postId"
                                element={<SinglePost />}
                            />
                        </Routes>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;