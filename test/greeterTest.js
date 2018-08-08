const assert = require('chai').assert;
const greeter = require('../src/js/greeter');

describe('Greeter Test', function() {
    it('It should return an HTML element', function() {
        let htmlElement = greeter.createElement("Ocean");
        assert.typeOf(htmlElement, 'object');
    })
});