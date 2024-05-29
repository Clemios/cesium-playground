const path = require("path");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const abilitiesType = new GraphQLObjectType({
    name: "ability",
    fields: {
        name: {
            type: GraphQLString,
            resolve: (parent: any) => parent.name
        },
        damage: {
            type: GraphQLString,
            resolve: (parent: any) => parent.damage
        },
        accuracy: {
            type: GraphQLString,
            resolve: (parent: any) => parent.accuracy
        },
        mana: {
            type: GraphQLString,
            resolve: (parent: any) => parent.mana
        },
        type: {
            type: GraphQLString,
            resolve: (parent: any) => parent.type
        }
    }
});
const pokemonsType = new GraphQLObjectType({
    name: "pokemons",
    fields: {
        name: {
            type: GraphQLString,
            resolve: (parent: any) => parent.name
        },
        abilities: {
            type: new GraphQLList(abilitiesType),
            resolve(parent: any) {
                const abilities = require(path.resolve("data/abilities.json"));
                return abilities.filter((ability: any) =>
                    ability.linkedTo.includes(parent.name)
                );
            }
        }
    }
});
export default pokemonsType;