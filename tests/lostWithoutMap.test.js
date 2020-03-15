const {lostWithoutMap} = require("../src");

describe("lostWithoutMap", () => {
    test("retuns elements *2 ", () => {
        expect(lostWithoutMap([1, 2, 3])).toEqual([2, 4, 6]);
        /*expect(lostWithoutMap([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8]);
        expect(lostWithoutMap([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4]);*/
    });
});





