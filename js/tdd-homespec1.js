// eslint-disable-next-line no-undef
describe('script-1.js -> getNumWord', () => {
  // eslint-disable-next-line no-undef
  it('Should return proper word depending on number', () => {
    // eslint-disable-next-line no-undef
    expect(getNumWord(0, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
    // eslint-disable-next-line no-undef
    expect(getNumWord(1, 'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    // eslint-disable-next-line no-undef
    expect(getNumWord(2, 'яблоко', 'яблока', 'яблок')).toBe('яблока');
    // eslint-disable-next-line no-undef
    expect(getNumWord(5, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
    // eslint-disable-next-line no-undef
    expect(getNumWord(21, 'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    // eslint-disable-next-line no-undef
    expect(getNumWord(22, 'яблоко', 'яблока', 'яблок')).toBe('яблока');
    // eslint-disable-next-line no-undef
    expect(getNumWord(25, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
    // eslint-disable-next-line no-undef
    expect(getNumWord(101, 'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    // eslint-disable-next-line no-undef
    expect(getNumWord(789, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
    // eslint-disable-next-line no-undef
    expect(getNumWord(1222, 'яблоко', 'яблока', 'яблок')).toBe('яблока');
    // eslint-disable-next-line no-undef
    expect(getNumWord(10000, 'яблоко', 'яблока', 'яблок')).toBe('яблок');
  });
});


// // eslint-disable-next-line no-undef
// describe('script-2.js -> getUserData', () => {
//   const option = 1;
//   const case1 = ['Болотин Никита Андреевич', 22, true, false];
//   const case2 = [null, 22, true, false];
//   const case3 = ['', 22, true, false];
//   const case4 = ['Болотин Никита Андреевич', null, true, false];
//   const case5 = ['Болотин Никита Андреевич', '', true, false];
//   const case6 = ['Болотин Никита Андреевич', NaN, true, false];
//
//   beforeEach(function () {
// spyOn(window, 'prompt').and.callFake(function () {
// let result;
// switch (option) {
//   case 1:
//     result =
// }
//     });
//   });
// });


// eslint-disable-next-line no-undef
describe('script-3.js -> isPalindrome', () => {
  // eslint-disable-next-line no-undef
  it('should return the proper answer', () => {
    // eslint-disable-next-line no-undef
    expect(isPalindrome('топот')).toBe('Данное слово-палиндром!');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('анна')).toBe('Данное слово-палиндром!');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('дед')).toBe('Данное слово-палиндром!');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('mom')).toBe('Данное слово-палиндром!');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('кот')).toBe('Данное слово не является палиндромом');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('она')).toBe('Данное слово не является палиндромом');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('123')).toBe('Данное слово не является палиндромом');
    // eslint-disable-next-line no-undef
    expect(isPalindrome('лес')).toBe('Данное слово не является палиндромом');
  });
});
