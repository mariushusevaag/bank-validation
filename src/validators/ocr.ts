import { mod10 } from "../helpers/mod";

export const validateOcrSweden = (value: string): boolean => {
  if (!/^\d+$/.test(value)) return false;
  return mod10(value);
};