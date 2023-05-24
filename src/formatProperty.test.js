const formatProperty = require("./formatProperty");

const propertyFromMongoose = {
    _id: "61480db44ab0cf7175467757",
    askingPrice: "$891822.26",
    description: "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
    address: "8 Shasta Pass",
    title: "A Beauty on Shasta",
    img: "https://placeimg.com/640/480/arch",
        
};

describe("formatProperty", () => {
    it("should change _id to id", () => {
        const expected = 
            {
              id: "61480db44ab0cf7175467757",
              askingPrice: "$891822.26",
              description: "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
              address: "8 Shasta Pass",
              title: "A Beauty on Shasta",
              img: "https://placeimg.com/640/480/arch"
            };
        const received = formatProperty(propertyFromMongoose)
        expect(received).toEqual(expected);
    });
});