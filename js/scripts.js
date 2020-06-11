let numeralKey = [
  {"number":1000,"numeral":"M"},
  {"number":900,"numeral":"CM"},
  {"number":500,"numeral":"D"},
  {"number":400, "numeral":"CD"},
  {"number":100, "numeral":"C"},
  {"number":90, "numeral":"XC"},
  {"number":50, "numeral":"L"},
  {"number":40, "numeral":"XL"},
  {"number":10, "numeral":"X"},
  {"number":9, "numeral":"IX"},
  {"number":5, "numeral":"V"},
  {"number":4, "numeral":"IV"},
  {"number":1, "numeral":"I"}
];

function xyz (inputNumber) {
  let outputNumeral;
  let currentNumber = inputNumber;
  while (currentNumber > 0) {
    for (i = 0; i < numeralKey.length; i++ )
      if (inputNumber >= numeralKey[i].number) {
        outputNumeral = outputNumeral + numeralKey[i].numeral;
        currentNumber -= numeralKey[i].number;
        break;
    }
  }
}