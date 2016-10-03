[![NPM](https://nodei.co/npm/get-countries-info.png?downloads=true)](https://nodei.co/npm/get-countries-info/)
[![NPM](https://nodei.co/npm-dl/get-countries-info.png?months=3&height=2)](https://nodei.co/npm/get-countries-info/)

Collection of 231 countries with detailed, information, such a, 'languages', 'currencies', 'provinces', 'timezones' and etc. even link to "wiki".
You can fetch only that fields which you need in specific country only or all together.

[data structure](#data-structure)

Also you have two way how to use this package:</br>
1. [simple use, just import one function and fetch only that data which you need.](#vanilla-javascript)</br>
2. [for advanced users, graphQL](#graphql)

### Install
~~~sh
npm i -S get-countries-info
~~~

##vanilla-javaScript
~~~js
import countries from 'get-countries-info';

countries(); //will return array of all countries with all fields
countries({}, 'name'); //will return array of all countries name, note that you have to pass empty object as first argument
countries({ISO: 'USA'}, 'provinces'); //return array of all provinces in USA
~~~

As you noted, first argument is query object, and second is a string name of property you want to fetch.
Full [data structure](#data-structure) with all fields you'll see below.
Also in [vanilla-javaScript](#vanilla-javaScript) mode, you can fetch only one specific property at time or all together.
So if you want to fetch couple additional properties, you have to call this function for each property, or you can use [graphQL](#graphQL) mode and in one query fetch all you need.

First argument is an object with queries, it supports following queries:
~~~js
import countries from 'get-countries-info';

let query = {
        name: 'String', //country name
        capital: 'String',
        currency: 'String',
        region: 'String',
        language: 'String',
        ISO: 'String' //country ISO 3166-1 alpha-3 code
}
countries(query); //to fetch all fields
//or
countries(query, 'provinces'); //or to get only 'provinces'
~~~

##graphQL

####Make sure that your ```graphql``` package is the same version as used in ```get-countries-info``` or vice versa.

In your queries file:
~~~js
import {GraphQLObjectType} from 'graphql';
import countriesQuery from 'get-countries-info/lib/graphql';

let queries = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        ...
        ...
        ...
        getCountries: countriesQuery
    })
});
~~~

And that's it! Now you can use graphQL to query specific shape of object you need.
Query method support same variables as above: ```name: 'String', capital: 'String', currency: 'String', region: 'String', language: 'String', ISO: 'String'```.
 
###Example
~~~js
{
  getCountries(ISO: "USA") {
    name
    wiki
    population
    ISO {
      alpha2
      alpha3
    }
    provinces
  }
}
~~~
 
 Will return:
 
~~~js
{
  "data": {
    "getCountries": [
      {
        "name": "United States",
        "wiki": "http://en.wikipedia.org/wiki/united_states_of_america",
        "population": 319259000,
        "ISO": {
          "alpha2": "US",
          "alpha3": "USA"
        },
        "provinces": [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          ...
          ...
          ...
        ]
      }
    ]
  }
}
~~~

##data-structure

Data always comes as array of objects. Each object presents country and has following shape.
~~~js
{
  name: String,
      altSpellings: Array,
      area: Number,
      borders: Array,
      callingCodes: Array,
      capital: String,
      currencies: Array,
      demonym: String,
      flag: String,
      ISO: {
          alpha2: String,
          alpha3: String
      },
      languages: Array,
      latlng: [Number],
      nativeName: String,
      population: Number,
      provinces: Array,
      region: String,
      subregion: String,
      timezones: Array,
      tld: Array,
      translations: {
          de: String,
          es: String,
          fr: String,
          ja: String,
          it: String
      },
      wiki: String
}
~~~

####Star to be up to date.