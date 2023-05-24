const request = require("supertest");
const app = require("./app");

describe("app", () => {
    test("GET/ properties should respond with a list of properties", async() => {
        const expected = [
            {
              "id": "61480db44ab0cf7175467757",
              "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
              "address": "8 Shasta Pass",
              "title": "A Beauty on Shasta",
              "img": "https://placeimg.com/640/480/arch",
              "askingPrice": "$891822.26"
            },
            {
              "id": "61480db44ab0cf7175467755",
              "description": "Large Executive townhouse bordering On Town Centre",
              "address": "2 Bowman Avenue",
              "title": "Bowman Brilliance – Style and Value!",
              "img": "https://placeimg.com/642/482/arch",
              "askingPrice": "$876330.57"
            },
            {
              "id": "61480db44ab0cf7175467756",
              "description": "Combining contemporary comforts with a functional layout",
              "address": "8237 Moland Hill",
              "title": "Rare Moland Hill Stunner",
              "img": "https://placeimg.com/644/484/arch",
              "askingPrice": "$946446.87"
            },
          ];

          await request(app)
          .get("/properties")
          .expect(200)
          .expect((response) => {
            expect(response.body).toEqual(expected);
          });
    });
});

describe("app", () => {
    test("GET /properties/:id should respond with single property", async() => {
        const expected = {
              id: "61480db44ab0cf7175467757",
              askingPrice: "$891822.26",
              description: "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
              address: "8 Shasta Pass",
              title: "A Beauty on Shasta",
              img: "https://placeimg.com/640/480/arch",
            };
            
  
       await request(app)
        .get("/properties/61480db44ab0cf7175467757")
        .expect(200)
        .expect((response) => {
            expect(response.body).toEqual(expected);
  
        });
    });
  });

  describe("app", () => {
    test("GET /properties/:id should respond with 400 BAD REQUEST with invalid id", async() => {
        const expected = {
              message: "id provided is invalid"
            };
            
  
       await request(app)
        .get("/properties/111")
        .expect(400)
        .expect((response) => {
            expect(response.body).toEqual(expected);
  
        });
    });
  });

  describe("app", () => {
    test("GET /properties/:id should respond with 404 NOT FOUND with unknown id", async() => {
        const expected = {
              message: "id not found"
            };
            
  
       await request(app)
        .get("/properties/61480db44ab0cf7175467752")
        .expect(404)
        .expect((response) => {
            expect(response.body).toEqual(expected);
  
        });
    });
  });

  describe("app", () => {
    test("POST /properties should create a new property for sale to display", async() => {
        const expected = {
            "description": "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
            "address": "8 Shasta Pass",
            "title": "A Beauty on Shasta",
            "img": "https://placeimg.com/640/480/arch",
            "askingPrice": "$891822.26"
          }

        await request(app)
        .post("/properties")
        .send(expected)
        .expect(200)
        .expect((response) => {
            expect(response.body).toEqual(expect.objectContaining(expected));
        });

    });
  });