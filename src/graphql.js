import {GraphQLList, GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';
import countries from './index';

let country = new GraphQLObjectType({
    name: 'country',
    description: 'Country schema',
    fields: {
        name: {type: GraphQLString},
        altSpellings: {type: new GraphQLList(GraphQLString)},
        area: {type: GraphQLInt},
        borders: {type: new GraphQLList(GraphQLString)},
        callingCodes: {type: new GraphQLList(GraphQLString)},
        capital: {type: GraphQLString},
        currencies: {type: new GraphQLList(GraphQLString)},
        demonym: {type: GraphQLString},
        flag: {type: GraphQLString},
        ISO: {
            type: new GraphQLObjectType({
                name: 'ISO',
                fields: () => ({
                    alpha2: {type: GraphQLString},
                    alpha3: {type: GraphQLString}
                })
            })
        },
        languages: {type: new GraphQLList(GraphQLString)},
        latlng: {type: new GraphQLList(GraphQLInt)},
        nativeName: {type: GraphQLString},
        population: {type: GraphQLInt},
        provinces: {type: new GraphQLList(GraphQLString)},
        region: {type: GraphQLString},
        subregion: {type: GraphQLString},
        timezones: {type: new GraphQLList(GraphQLString)},
        tld: {type: new GraphQLList(GraphQLString)},
        translations: {
            type: new GraphQLObjectType({
                name: 'translations',
                fields: () => ({
                    de: {type: GraphQLString},
                    es: {type: GraphQLString},
                    fr: {type: GraphQLString},
                    ja: {type: GraphQLString},
                    it: {type: GraphQLString}
                })
            })
        },
        wiki: {type: GraphQLString}
    }
});

export default {
    type: new GraphQLList(country),
    args: {
        name: {type: GraphQLString},
        capital: {type: GraphQLString},
        currency: {type: GraphQLString},
        region: {type: GraphQLString},
        language: {type: GraphQLString},
        ISO: {type: GraphQLString}
    },
    resolve: (_, args) => countries(args)
};