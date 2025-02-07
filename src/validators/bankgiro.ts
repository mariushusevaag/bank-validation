import { swedish_banks } from "../data/banks";
import { validateBankSweden } from "./bank";

export const validateBankgiroSweden = (value: string): boolean => {
  const number = value.replace(/\D/g, "");

  for (const i in swedish_banks) {
    if (swedish_banks[i].regex.test(number)) {
      return validateBankSweden(number, swedish_banks[i]);
    }
  }

  return false;
};