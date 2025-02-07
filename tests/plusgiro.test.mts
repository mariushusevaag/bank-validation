import { describe, it, expect, vi } from 'vitest';
import { validatePlusgiroSweden } from '../src';

describe('validatePlusgiroSweden', () => {
  describe('basic validation', () => {
    it('should return false for empty string', () => {
      expect(validatePlusgiroSweden('')).toBe(false);
    });

    it('should return false for non-numeric strings', () => {
      expect(validatePlusgiroSweden('abc')).toBe(false);
      expect(validatePlusgiroSweden('123abc')).toBe(false);
      expect(validatePlusgiroSweden('12.34')).toBe(false);
    });
  });

  describe('length validation', () => {
    it('should return false for numbers shorter than 2 digits', () => {
      expect(validatePlusgiroSweden('1')).toBe(false);
    });

    it('should return true for numbers between 2-8 digits', () => {
      expect(validatePlusgiroSweden('12')).toBe(true);
      expect(validatePlusgiroSweden('123')).toBe(true);
      expect(validatePlusgiroSweden('1234')).toBe(true);
      expect(validatePlusgiroSweden('12345678')).toBe(true);
    });

    it('should return false for numbers longer than 8 digits', () => {
      expect(validatePlusgiroSweden('123456789')).toBe(false);
    });
  });

  describe('format validation', () => {
    it('should return true for valid plusgiro numbers', () => {
      expect(validatePlusgiroSweden('40580')).toBe(true);
      expect(validatePlusgiroSweden('954563')).toBe(true);
    });

    it('should return true for numbers with leading zeros', () => {
      expect(validatePlusgiroSweden('01234')).toBe(true);
      expect(validatePlusgiroSweden('00123')).toBe(true);
    });

    it('should return false for numbers with separators', () => {
      expect(validatePlusgiroSweden('123-456')).toBe(false);
      expect(validatePlusgiroSweden('123 456')).toBe(false);
    });
  });
});