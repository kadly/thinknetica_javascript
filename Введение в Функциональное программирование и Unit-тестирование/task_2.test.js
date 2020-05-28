describe('wordStat', () => {
  it('Lorem ipsum dolor sit amet.', () => {
    const result = wordStat('Lorem ipsum dolor sit amet.');
    const value = [
        { word: 'Lorem', sum: 511 },
        { word: 'ipsum', sum: 558 },
        { word: 'dolor', sum: 544 },
        { word: 'sit', sum: 336 },
        { word: 'amet.', sum: 469 }
    ];
    assert.deepEqual(result, value);
});
  it('empty string', () => {
    const result = wordStat('');
    const value = { word: "", sum: 0 };
  });
  it('x', () => {
    const result = wordStat('x');
    const value = { word: "x", sum: 120 };
  });
  it('?!', () => {
    const result = wordStat('');
    const value = { word: "?!", sum: 96 };
  });
})

describe('sumOfCharCodes', () => {
  it('Empty string', () => {
    const result = sumOfCharCodes('');
    const value = 0;
    assert.deepEqual(result, value);
  });
  it('Lorem = 511', () => {
    const result = sumOfCharCodes('Lorem');
    const value = 511;
    assert.deepEqual(result, value);
  });
  it('?! = 96', () => {
    const result = sumOfCharCodes('?!');
    const value = 96;
    assert.deepEqual(result, value);
  });
})