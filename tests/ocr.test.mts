import { describe, it, expect, vi } from 'vitest';
import { validateOcr } from '../src';

describe('validateOcr', () => {
  it('should return false for empty string', () => {
    expect(validateOcr('')).toBe(false);
  });

  it('should return false for non-digit string', () => {
    expect(validateOcr('abc')).toBe(false);
    expect(validateOcr('123abc')).toBe(false);
    expect(validateOcr('12.34')).toBe(false);
  });

  it('should call mod10 for digit-only strings', async () => {
    const mockMod10 = vi.spyOn(await import('../src/helpers/mod'), 'mod10')
      .mockImplementation((val) => true);

    validateOcr('12345');
    expect(mockMod10).toHaveBeenCalledWith('12345');

    mockMod10.mockRestore();
  });

  it('should return mod10 validation result for digit-only strings', async () => {
    const mockMod10 = vi.spyOn(await import('../src/helpers/mod'), 'mod10')
      .mockImplementation((val) => val === '12345');

    expect(validateOcr('12345')).toBe(true);
    expect(validateOcr('54321')).toBe(false);

    mockMod10.mockRestore();
  });
});