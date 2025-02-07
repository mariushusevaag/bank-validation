import { banks } from "../data/banks";
import { validateBank } from "./bank";

export const validateBankgiro = (value: string): boolean => {
  const number = value.replace(/\D/g, "");

  for (const i in banks) {
    if (banks[i].regex.test(number)) {
      return validateBank(number, banks[i]);
    }
  }

  return false;
};