import { describe, it, expect, vi } from 'vitest';
import { validatePlusgiro } from '../src';

describe('validatePlusgiro', () => {
  describe('basic validation', () => {
    it('should return false for empty string', () => {
      expect(validatePlusgiro('')).toBe(false);
    });

    it('should return false for non-numeric strings', () => {
      expect(validatePlusgiro('abc')).toBe(false);
      expect(validatePlusgiro('123abc')).toBe(false);
      expect(validatePlusgiro('12.34')).toBe(false);
    });
  });

  describe('length validation', () => {
    it('should return false for numbers shorter than 2 digits', () => {
      expect(validatePlusgiro('1')).toBe(false);
    });

    it('should return true for numbers between 2-8 digits', () => {
      expect(validatePlusgiro('12')).toBe(true);
      expect(validatePlusgiro('123')).toBe(true);
      expect(validatePlusgiro('1234')).toBe(true);
      expect(validatePlusgiro('12345678')).toBe(true);
    });

    it('should return false for numbers longer than 8 digits', () => {
      expect(validatePlusgiro('123456789')).toBe(false);
    });
  });

  describe('format validation', () => {
    it('should return true for valid plusgiro numbers', () => {
      expect(validatePlusgiro('40580')).toBe(true);
      expect(validatePlusgiro('954563')).toBe(true);
    });

    it('should return true for numbers with leading zeros', () => {
      expect(validatePlusgiro('01234')).toBe(true);
      expect(validatePlusgiro('00123')).toBe(true);
    });

    it('should return false for numbers with separators', () => {
      expect(validatePlusgiro('123-456')).toBe(false);
      expect(validatePlusgiro('123 456')).toBe(false);
    });
  });
});