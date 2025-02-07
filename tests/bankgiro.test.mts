import { describe, it, expect } from 'vitest';
import { validateBankgiro } from '../src';

describe('validateBankgiro', () => {
  describe('input formatting', () => {
    it('should handle non-numeric characters', () => {
      // Test one valid account number with different separators
      const validSwedbankAccount = '8327-9,764 441 646-8';
      expect(validateBankgiro(validSwedbankAccount)).toBe(true);
    });

    it('should handle empty string', () => {
      expect(validateBankgiro('')).toBe(false);
    });
  });

  describe('bank validation', () => {
    it('should validate correct Sparbankerna format', () => {
      // Type 1, comment 1 - excluding first clearing digit
      expect(validateBankgiro('8354-3,3 200 890-6')).toBe(true); // Valid mod10 checksum
      expect(validateBankgiro('8354-3,3 200 890-61')).toBe(false); // Invalid
    });

    it('should validate correct Nordea format', () => {
      // Type 1, comment 2 - including all digits
      expect(validateBankgiro('33008803209058')).toBe(true); // Valid mod10 checksum
      expect(validateBankgiro('13008803209058')).toBe(false); // Invalid checksum
    });

    it('should validate correct SEB format', () => {
      // Type 2 - only account number used for validation
      expect(validateBankgiro('50680241477')).toBe(true); // Valid mod11 checksum
      expect(validateBankgiro('50680241479')).toBe(false); // Invalid checksum
    });
  });

  describe('invalid formats', () => {
    it('should return false for completely invalid formats', () => {
      expect(validateBankgiro('123')).toBe(false); // Too short
      expect(validateBankgiro('99999999999999')).toBe(false); // Invalid bank format
    });
  });
});