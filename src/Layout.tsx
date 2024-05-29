import logo from './logo.svg';
import './App.css';
import { buildSchema, graphql } from 'graphql';
import { Link, Outlet } from 'react-router-dom';

function Layout() {

  // Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  hello() {
    return "Hello world!"
  }
}

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ hello }",
  rootValue
}).then(response => {
  console.log(response)
})


const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 2,
  offset: 1,
};

fetch('https://graphql-pokeapi.graphcdn.app/', {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: gqlQuery,
    variables: gqlVariables,
  }),
  method: 'POST',
})
  .then((res) => res.json())
  .then((res) => console.log('Response from server', res));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>CesiumJS Playground</span>
        <Link to="/pokemons">Pokemons</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
