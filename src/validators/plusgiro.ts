export const validatePlusgiro = (value: string): boolean => {
  return /^\d{2,8}$/.test(value);
};