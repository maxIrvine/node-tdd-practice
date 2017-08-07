const expect = require('chai').expect;
const FileManipulator = require("../fileReader");

let file = new FileManipulator();

describe('Can read file', () => {
    it('can read a file with string', function (done) {
        file.readFile("test.txt", function(content) {
        if (content === "hello max") done();
        else done(new Error("could not read"));
      });
    });
});

describe("Can DNS lookup", () => {
    it('can pull IP address', function (done) {
        this.timeout(5000);
        file.IpLookUp("http://www.digitalcrafts.com/", function (content) {
            if (content) done();
            else done(new Error("could not get IP address"));
        })
    })
});