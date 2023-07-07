import { getAllFestivals, getFestivalByDepartement, getFestivalByRegion, getFestivalByMonth } from "./index";

test("getAllFestivals should resolve to an array", async () => {
    await expect(getAllFestivals()).resolves.toBeInstanceOf(Array);
});

describe("getFestivalByRegion", () => {
    test("getFestivalByRegion should resolve to an array", async () => {
        await expect(getFestivalByRegion('Île-de-France')).resolves.toBeInstanceOf(Array);
    });
    test("getFestivalByRegion should reject with an error", async () => {
        await expect(getFestivalByRegion('Woipy')).rejects.toThrow('No festival found with this region');
    });
});

describe("getFestivalByDepartement", () => {
    test("getFestivalByDepartement should resolve to an array", async () => {
        await expect(getFestivalByDepartement("75")).resolves.toBeInstanceOf(Array);
    });

    test("getFestivalByDepartement should reject with an error", async () => {
        await expect(getFestivalByDepartement("102")).rejects.toThrow('No festival found with this departement');
    });
});

describe("getFestivalByMonth", () => {
    test("getFestivalByMonth should resolve to an array", async () => {
        await expect(getFestivalByMonth("02")).resolves.toBeInstanceOf(Array);
    });
    test("getFestivalByMonth should reject with an error", async () => {
        await expect(getFestivalByMonth("13")).rejects.toThrow('No festival found this month');
    });
});


