describe('sumOfPositive', () => {
  it('empty array', () => {
    const result = sumOfPositive([]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
  it('[-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]', () => {
    const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
    assert.deepEqual(result, { count: 5, sum: 357 });
  });
  it('[-1, -2, -3]', () => {
    const result = sumOfPositive([-1, -2, -3]);
    assert.deepEqual(result, { count: 0, sum: 0 });
  });
  it('[1, 2, 3]', () => {
    const result = sumOfPositive([1, 2, 3]);
    assert.deepEqual(result, { count: 3, sum: 6 });
  });
})