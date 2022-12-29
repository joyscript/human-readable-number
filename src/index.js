module.exports = function toReadable (number) {
  const numbers = {
    tillTwenty: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  }

  if (number == 0) return 'zero';

  const getNumTillHundred = (number) => {
    if(number % 100 == 0) return '';
    let numStr = number < 100 ? number.toString() : number.toString().slice(1);
    return numStr < 20 ? numbers.tillTwenty[+numStr]
      : `${numbers.tens[numStr[0]]} ${numbers.tillTwenty[numStr[1]]}`.trim();
  }

  return number < 100 ? getNumTillHundred(number)
    :`${numbers.tillTwenty[number.toString()[0]]} hundred ${getNumTillHundred(number)}`.trim();
}
