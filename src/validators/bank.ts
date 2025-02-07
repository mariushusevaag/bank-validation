import { mod10, mod11 } from "../helpers/mod";
import { Bank } from "../types";

export const validateBank = (number: string, bank: Bank) => {
  const clen = bank.clen ? bank.clen : 4;
  const clearing = number.slice(0, clen);
  const accnum = number.slice(clen);
  const digits =
    bank.type === 1 && bank.comment === 1
      ? clearing.slice(1) + accnum
      : bank.type === 1 && bank.comment === 2
        ? clearing + accnum
        : accnum;

  const valid = bank.mod10 ? mod10(digits) : mod11(digits);

  if (!valid) {
    return false;
  }

  return true;
};