const {rmFirstLastChar} = require("../src");

describe("rmFirstLastChar",() => {
    test("Remove 1st & last character", () => {
        expect(rmFirstLastChar('eloquent')).toEqual('loquen');
        expect(rmFirstLastChar('country')).toEqual('ountr');
        expect(rmFirstLastChar('person')).toEqual('erso');
        expect(rmFirstLastChar('place')).toEqual('lac');
    });
});