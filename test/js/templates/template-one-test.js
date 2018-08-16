//const assert = require('chai').assert;
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
        let result = templateOne.templateOne2();

        describe("templateOne2 Function typeOf Test", function()
        {
            it('It should return number', function() 
            {
                assert.typeOf(result, 'number', 'we have a number');
            })   
        });

        describe("templateOne2 Function equality Test", function()
        {
            it('It should be equal to 10', function() 
            {
                assert.equal(result, 10);
            })   
        });

        describe("templateOne2 Function isAbove Test", function()
        {
            it('It should be greater than 5', function() 
            {
                assert.isAbove(result, 5);
            })   
        });
    });
});

// describe('Array', () => {
//     describe('#indexOf()', () => {
//       it('should return -1 when the value is not present', () => {
//         assert.equal([1,2,3].indexOf(4), -1);
//       });
//     });
//   });