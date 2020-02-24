var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('properties.ini');
properties.append('another.file');
var propertiesCount = properties.length;
console.log("Total Properties : "+ propertiesCount)
console.log(properties.get('main.some.thing'));
console.log(properties.get('blah.some.thing'));
console.log(properties.get('some.brandName'));
var property = properties.path();
console.log(property)
