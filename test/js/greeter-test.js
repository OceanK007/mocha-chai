// This test won't work, since inside service.js, we have used 
// "document", which is related to dom manipulation, so we need
// headless browser, checkout to branch mocha-chai-karma

// const assert = require('chai').assert;
const greeter = require('../../src/js/greeter');

describe('Greeter Test', function() {

    describe('Create Element', function()
    {
        it('It should return an HTML element', function() {
            let htmlElement = greeter.createElement("Ocean");
            console.log(typeof htmlElement);
            //console.log(typeof(htmlElement).should.equals('object'));
            //expect(htmlElement.props()).to.have.property('maxLength', '10');
            assert.typeOf(htmlElement, 'object');   // Why failing???
            //assert.containIgnoreSpaces(htmlElement, "Ocean");
        })
    });
});

