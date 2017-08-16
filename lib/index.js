'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
exports.default = function (args, prop) {
    var query = {};
    args.name ? query.name = args.name : null;
    args.capital ? query.capital = args.capital : null;
    args.currencies ? query.currencies = args.currencies : null;
    args.region ? query.region = args.region : null;
    function queryInArray(country) {
        var result = 0, argsCount = 0;
        if (args.name) {
            argsCount++;
            if (country.name === args.name) result++;
        } else if (args.capital) {
            argsCount++;
            if (country.capital === args.capital) result++;
        } else if (args.currency) {
            argsCount++;
            country.currencies.forEach(function (prop) {
                if (prop === args.currency) result++;
            });
        } else if (args.region) {
            argsCount++;
            if (country.region === args.region) result++;
        } else if (args.ISO) {
            argsCount++;
            if (country.ISO.alpha3 === args.ISO) result++;
            else if (country.ISO.alpha2 === args.ISO) result++;
        } else if (args.language) {
            argsCount++;
            country.languages.forEach(function (prop) {
                if (prop === args.language) result++;
            });
        } else {
            return true;
        }
        return result === argsCount;
    }

    var fetchedData = data.filter(queryInArray);
    if (prop) {
        var _ret = function () {
            var newFetchedData = [];
            fetchedData.forEach(function (country) {
                if (country.hasOwnProperty(prop)) {
                    newFetchedData.push(country[prop]);
                }
            });
            return {v: newFetchedData};
        }();
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object")return _ret.v;
    } else {
        return fetchedData;
    }
};
var data = require('../data.json');