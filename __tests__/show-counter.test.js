import { TestEnvironment } from "jest-environment-jsdom";
import counterShows from "../src/modules/counter-shows.js";

describe('Show counter function', () => {
    test('Return the count of displayed shows', () => {
        const shows = [
            {
                id: 1,
                name: 'under the dome',
                img: 'picture1.jpg',
            },
            {
                id: 2,
                name: 'prision break',
                img: 'picture2.jpg',
            },
            {
                id: 3,
                name: 'Bitten',
                img: 'picture3.jpg',
            },
            {
                id: 4,
                name: 'Arrow',
                img: 'picture4.jpg',
            },
            {
                id: 5,
                name: 'Glee',
                img: 'picture5.jpg',
            },
        ];
        expect(counterShows(shows)).toBe(5);
    });
});