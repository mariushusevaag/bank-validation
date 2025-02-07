# Bank Validation Sweden Package

This package provides validation functions for bank, bankgiro, ocr & plusgiro validation in Sweden. It is designed to be simple and easy to use, ensuring that the data you work with meets the necessary criteria.

## Installation

To install the validation package, use npm:

```bash
npm install bank-validation
```

## Usage

You can import the validation functions as follows:

```typescript
import { validateOcr } from "bank-validation";
```

### validateBank

This function validates banks based on special criterias.

**Example:**

```typescript
const bank: Bank = {
  name: "Bank Name",
  regex: "^[0-9]{8}$",
  type: 1
  comment: 2
  mod10: true
  clen: 2
};
const isValid = validateBank("123456789", bank);
console.log(isValid); // true or false
```

### validateOcr

This function validates OCR data.

**Example:**

```typescript
const isOcrValid = validateOcr("OCR_DATA");
console.log(isOcrValid); // true or false
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.