import { describe, it, expect } from 'vitest';
import { validateBank } from '../src';
import type { Bank } from '../src/types';

describe('validateBank', () => {
  describe('mod10 validation', () => {
    it('should validate type 1 comment 1 (exclude first clearing digit)', () => {
      const bank: Bank = {
        name: 'Danske Bank',
        regex: /^24[0-9][0-9]{8}$/,
        type: 1,
        comment: 1,
        mod10: true,
        clen: 4
      };

      // Valid account: clearing=2410, account=0001234
      // For mod10 calculation: 410001234
      // Weighted sum: (4×1)+(1×2)+(0×1)+(0×2)+(0×1)+(1×2)+(2×1)+(3×2)+(4×1) = 4+2+0+0+0+2+2+6+4 = 20
      // 20 is divisible by 10, so this is valid
      expect(validateBank('2410001234', bank)).toBe(true);

      // Invalid checksum: changing last digit makes sum not divisible by 10
      expect(validateBank('2410001235', bank)).toBe(false);
    });

    it('should validate type 1 comment 2 (include all digits)', () => {
      const bank: Bank = {
        name: 'Nordnet Bank',
        regex: /^910[0-9]{8}$/,
        type: 1,
        comment: 2,
        mod10: true,
        clen: 4
      };

      // Valid account: clearing=9100, account=0004559
      expect(validateBank('9100000455', bank)).toBe(true);
      // Invalid checksum
      expect(validateBank('9100000456', bank)).toBe(false);
    });
  });

  describe('mod11 validation', () => {
    it('should validate using only account number', () => {
      const bank: Bank = {
        name: "Handelsbanken",
        regex: /^6[0-9]{12}$/,
        type: 2,
        comment: 2
      };

      // Valid account: clearing=6000, account=123456789
      expect(validateBank('600012345679', bank)).toBe(true);
      // Invalid checksum
      expect(validateBank('600012345678', bank)).toBe(false);
    });
  });

  describe('clearing length', () => {
    it('should handle non-standard clearing length', () => {
      const bank: Bank = {
        name: 'Swedbank',
        regex: /^8[0-9]{10,14}$/,  // Real Swedbank regex pattern
        type: 2,
        comment: 3,
        mod10: true,
        clen: 5
      };

      expect(validateBank('80001234567', bank)).toBe(true);
      expect(validateBank('80001234568', bank)).toBe(false);
    });
  });
});