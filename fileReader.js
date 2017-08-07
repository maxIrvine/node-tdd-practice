const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

// const rl = readline.createInterface ({
//         input: process.stdin,
//         output: process.stdout
// });

class FileManipulator {
    constructor() {

    }
    readFile(name, callback) {
        fs.readFile(name, (err,buffer) => {
            if (err) {
                return err.message;
            }
            let content = buffer.toString();
            console.log(content);
            callback(content);
        });
    }

    IpLookUp(domain, callback) {
        dns.lookup(domain, (err, address, family) => {
        if (err) {
            return err.message;
        }
            console.log("IP address: " + address);
        });
    }
}

module.exports = FileManipulator;