import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="text-center p-6">
            <h1 className="text-3xl font-bold my-4">Welcome to the GraphQL-PokeAPI and Cesium Playground!</h1>
            <p className="mb-8">
                This is a demo application that showcases two exciting features: the GraphQL and Cesium.
            </p>
            <div className='flex flex-col gap-8 p-6'>
                <div>
                    <Link to="/pokemons"><h2 className="text-2xl font-bold mb-2">GraphQL-PokeAPI</h2></Link>
                    <p className="mb-4">
                        The GraphQL-PokeAPI is a GraphQL API that provides access to a vast amount of Pokémon data.
                    </p>
                </div>
                <div>
                    <Link to="/cesium"><h2 className="text-2xl font-bold mb-2">Cesium</h2></Link>
                    <p className="mb-4">
                        Cesium is an open-source JavaScript library for creating 3D globes and maps. It allows you to visualize geospatial data in a highly interactive and immersive way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;