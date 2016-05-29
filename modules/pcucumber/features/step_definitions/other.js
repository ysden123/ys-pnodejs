/**
 * other step
 */

module.exports = function() {
    var self = this;

    this.Given(/^the arg "([^"]*)"$/, function(input, callback) {
        self.expression = input;
        callback();
    });

    this.When(/^the other is run$/, function(callback) {
        // self.result = self.calculator.run(self.expression);
        self.result = self.other.run(self.expression);
        callback();
    });

    this.Then(/^the other output should be "([^"]*)"$/, function(output, callback) {
        self.expect(Number(self.result)).to.equal(Number(output));
        callback();
    });
}