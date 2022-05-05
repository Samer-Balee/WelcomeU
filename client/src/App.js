import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;