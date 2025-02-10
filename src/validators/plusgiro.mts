export const validatePlusgiroSweden = (value: string): boolean => {
  return /^\d{2,8}$/.test(value);
};