import Validator from '../basic';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateUsername', () => {
    test('returns true for valid username', () => {
      expect(validator.validateUsername('john_12_doe')).toBe(true);
      expect(validator.validateUsername('jane-doe')).toBe(true);
      expect(validator.validateUsername('johndoe')).toBe(true);
    });

    test('returns false for invalid username', () => {
      expect(validator.validateUsername('john_doe123')).toBe(false);
      expect(validator.validateUsername('123johndoe')).toBe(false);
      expect(validator.validateUsername('john-doe_')).toBe(false);
      expect(validator.validateUsername('-johndoe')).toBe(false);
      expect(validator.validateUsername('johndoe-')).toBe(false);
      expect(validator.validateUsername('jane_doe_7890')).toBe(false);
    });
  });
});
