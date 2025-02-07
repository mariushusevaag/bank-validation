# Bank Validation Package

This package provides validation functions for bank, bankgiro, ocr, plusgiro, etc. It is designed to be simple and easy to use, ensuring that the data you work with meets the necessary criteria.

## Installation

To install the validation package, use npm:

```bash
npm install @stacc/bank-validation
```

## Usage

You can import the validation functions as follows:

```typescript
import { validateOcrSweden } from "bank-validation";
```

### validateBankSweden

This function validates banks based on special criterias.

**Example:**

```typescript
const bank: BankSweden = {
  name: "Bank Name",
  regex: "^[0-9]{8}$",
  type: 1
  comment: 2
  mod10: true
  clen: 2
};
const isValid = validateBankSweden("123456789", bank);
console.log(isValid); // true or false
```

### validateOcrSweden

This function validates swedish OCR.

**Example:**

```typescript
const isOcrValid = validateOcrSweden('12345');
console.log(isOcrValid); // true or false
```

### validatePlusgiroSweden

This function validates swedish plusgiro.

**Example:**

```typescript
const isPlusgiroValid = validatePlusgiroSweden('00123');
console.log(isPlusgiroValid); // true or false
```

### validateBankgiroSweden

This function validates swedish bankgiro.

**Example:**

```typescript
const isBankgiroValid = validateBankgiroSweden('50680241477');
console.log(isBankgiroValid); // true or false
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
