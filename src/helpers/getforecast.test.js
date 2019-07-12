import { getForeCast, getCurrentWeather } from './getforecast';

describe("Get forecast function", () => {
    it("if proper city is set must return an array of objects", async () => {
        expect.assertions(1);
        const response = await getForeCast("Berlin,DE");
        expect(Array.isArray(response)).toBe(true);

    })
    it("if unknown city is set must return an string message", async () => {
        expect.assertions(1);
        try {
            const response = await getForeCast("Pepeland");
        } catch (error) {
            expect(typeof (error)).toBe("string");
        }

    })
});
describe("Get Current Weather function", () => {
    it("if proper city is set must return an object", async () => {
        expect.assertions(1);
        const response = await getCurrentWeather("Berlin,DE");
        expect(typeof(response)).toBe("object");

    })
    it("if unknown city is set must return an string message", async () => {
        expect.assertions(1);
        try {
            const response = await getCurrentWeather("Pepeland");
        } catch (error) {
            expect(typeof (error)).toBe("string");
        }

    })
});