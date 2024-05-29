import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POKEMONS } from '../../queries/pokemonquery';

const Pokemons: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { limit: 3, offset: 0 }
      });

    return (
        <>
            <h1 className="text-3xl font-bold my-4">Pokemons</h1>
            <div className='flex justify-center'>
                {data?.pokemons?.results?.map((pokemon: any) => (
                    <div key={pokemon.id}>            
                        <img src={pokemon.image} alt={pokemon.name} />
                        {pokemon.name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Pokemons;