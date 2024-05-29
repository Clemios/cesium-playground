import React from 'react';

interface Pokemon {
    id: number;
    name: string;
    type: string;
}

const Pokemons: React.FC = () => {
    const pokemons: Pokemon[] = [
        { id: 1, name: 'Pikachu', type: 'Electric' },
        { id: 2, name: 'Charizard', type: 'Fire/Flying' },
        { id: 3, name: 'Bulbasaur', type: 'Grass/Poison' },
        // Add more pokemons here
    ];

    return (
        <div>
            <h1>Pokemons</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        {pokemon.name} - {pokemon.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemons;