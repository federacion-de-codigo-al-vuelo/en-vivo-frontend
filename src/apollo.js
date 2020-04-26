import fetch from 'cross-fetch'

import ApolloClient from 'apollo-boost'


const apollo = uri => new ApolloClient(
    {
        uri,
        fetch
    }
);


export default apollo