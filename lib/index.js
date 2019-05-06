function cpfValidator (cpf) {
  if (typeof cpf !== 'string') {
    return false;
  }

  cpf = cpf.replace(/[^0-9]/g, '');
  if (cpf.length !== 11) {
    return false;
  }

  const invalidCpf = [
    '01234567890',
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];
  
  if (invalidCpf.indexOf(cpf) !== -1) {
    return false;
  }

  if (digitCalc(cpf, 9) && digitCalc(cpf, 10)) {
    return true;
  } else {
    return false;
  }
}

function digitCalc (cpf, num){
  let cpfArray = cpf.split('');
  let cpfDigits = cpfArray.slice(0, num);
  let total = num + 1;
  let resultCpf = cpfDigits.reduce((result, num) =>
    result + (num * total--), 0);
  let digit = (resultCpf % 11) < 2 ? 0 : 11 - (resultCpf % 11);
  if (parseInt(cpfArray[num]) === digit) {
    return true;
  } else {
    return false;
  }
} 

module.exports.cpfValidator = cpfValidator;