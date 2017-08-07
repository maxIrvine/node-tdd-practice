const expect = require('chai').expect;

let file = new FileManipulator();

describe('Can read file', () => {
    it('can read a file with string', () => {
        expect(file("test.txt")).to.equal("hello max");
    });
});