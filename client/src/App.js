import React from "react";

// function App() {
//     return (
//         <div className="container mx-auto">
//             <h1 className="text-3xl font-bold underline">
//                 Hello world!
//             </h1>
//             <article className="prose lg:prose-xl">
//                 <h1>Garlic bread with cheese: What the science tells us</h1>
//                 <p className="bg-red-500 sm:bg-red-600 lg:bg-blue-800">
//                     For years parents have espoused the health benefits of eating garlic bread with cheese to their
//                     children, with the food earning such an iconic status in our culture that kids will often dress
//                     up as warm, cheesy loaf for Halloween.
//                 </p>
//                 <p>
//                     But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
//                     springing up around the country.
//                 </p>

//             </article>
//         </div>
//     )
// }




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Profile from './pages/Profile';
import SinglePost from './pages/singlePost'
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
                    <div className="container">
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
                            
                        </Routes>
                    </div>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;