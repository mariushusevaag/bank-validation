import { describe, it, expect, vi } from 'vitest';
import { validateOcrSweden } from '../src';

describe('validateOcrSweden', () => {
  it('should return false for empty string', () => {
    expect(validateOcrSweden('')).toBe(false);
  });

  it('should return false for non-digit string', () => {
    expect(validateOcrSweden('abc')).toBe(false);
    expect(validateOcrSweden('123abc')).toBe(false);
    expect(validateOcrSweden('12.34')).toBe(false);
  });

  it('should call mod10 for digit-only strings', async () => {
    const mockMod10 = vi.spyOn(await import('../src/helpers/mod'), 'mod10')
      .mockImplementation((val) => true);

    validateOcrSweden('12345');
    expect(mockMod10).toHaveBeenCalledWith('12345');

    mockMod10.mockRestore();
  });

  it('should return mod10 validation result for digit-only strings', async () => {
    const mockMod10 = vi.spyOn(await import('../src/helpers/mod'), 'mod10')
      .mockImplementation((val) => val === '12345');

    expect(validateOcrSweden('12345')).toBe(true);
    expect(validateOcrSweden('54321')).toBe(false);

    mockMod10.mockRestore();
  });
});