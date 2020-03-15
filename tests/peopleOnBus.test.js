const {peopleOnBus} = require("../src");

describe("peopleOnBus", () => {
    test("Count people get into/off bus", () => {
        expect(peopleOnBus([[10,0],[3,5],[5,8]])).toEqual(5);
        expect(peopleOnBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17);
        expect(peopleOnBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
    });
});
