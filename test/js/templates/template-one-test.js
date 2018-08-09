const assert = require('chai').assert;
const templateOne = require('../../../src/js/templates/template-one');

describe('template-one File Test', function() 
{
    describe("templateOne1 Function Test", function()
    {
        it('It should return string', function() 
        {
            let result = templateOne.templateOne1("Ocean");
            assert.typeOf(result, 'string', 'we have a string');
        })
    });

    describe("templateOne2 Function Test", function()
    {
        it('It should return number', function() 
        {
            let result = templateOne.templateOne2();
            assert.typeOf(result, 'number', 'we have a number');
        })
    });
});