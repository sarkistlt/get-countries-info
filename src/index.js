let data = require('../data.json');

export function countries(args, prop) {
    let query = {};
    args.name ? query.name = args.name : null;
    args.capital ? query.capital = args.capital : null;
    args.currencies ? query.currencies = args.currencies : null;
    args.region ? query.region = args.region : null;

    function queryInArray(country) {
        let result = 0,
            argsCount = 0;

        if (args.name) {
            argsCount++;
            if (country.name === args.name) result++;
        } else if (args.capital) {
            argsCount++;
            if (country.capital === args.capital) result++;
        } else if (args.currency) {
            argsCount++;
            country.currencies.forEach(prop => {
                if (prop === args.currency) result++;
            });
        } else if (args.region) {
            argsCount++;
            if (country.region === args.region) result++;
        } else if (args.ISO) {
            argsCount++;
            if (country.ISO.alpha3 === args.ISO) result++;
        } else if (args.language) {
            argsCount++;
            country.languages.forEach(prop => {
                if (prop === args.language) result++;
            });
        } else {
            return true;
        }

        return result === argsCount;
    }

    let fetchedData = data.filter(queryInArray);

    if (prop) {
        let newFetchedData = [];

        fetchedData.forEach(country => {
            if (country.hasOwnProperty(prop)) {
                newFetchedData.push(country[prop]);
            }
        });
        return newFetchedData;
    } else {
        return fetchedData;
    }
}

export countriesQuery from './graphql';
