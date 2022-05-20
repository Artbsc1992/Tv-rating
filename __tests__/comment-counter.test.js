import comments from '../src/modules/comment-counter.js';

describe('the comments counter function', () => {
  it('should return the length of the passed array', () => {
    const commenttest = [
      {
        username: 'Jane',
        comment: 'hello',
      },
      {
        username: 'saif',
        comment: 'hello',
      },
      {
        username: 'sobia',
        comment: 'hello',
      },
      {
        username: 'maha',
        comment: 'hello',
      },
      {
        username: 'maryam',
        comment: 'hello saif kesy hw',
      },
    ];
    expect(comments(commenttest)).toBe(5);
  });
});
