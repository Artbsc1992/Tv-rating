import { resCounter } from "../src/modules/reservations"

describe('the reservations counter function', () => {
  it('should return the length of the passed array', () => {
    const reservationsResponse = [
      {
        "username": "Jane",
        "date_end": "2020-10-16",
        "date_start": "2020-10-15"
      },
      {
        "username": "Ronald",
        "date_end": "2022-05-21",
        "date_start": "2022-05-19"
      },
      {
        "date_start": "2022-05-13",
        "date_end": "2022-05-28",
        "username": "Test"
      }
    ]
    expect(resCounter(reservationsResponse)).toBe(3);
  })
})